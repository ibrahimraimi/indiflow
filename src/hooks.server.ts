import { type Handle, redirect } from "@sveltejs/kit";
import { dev } from "$app/environment";

import PocketBase from "pocketbase";
import { PUBLIC_DATABASE } from "$env/static/public";

const allowedHeaders = ["retry-after", "content-type"];

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(PUBLIC_DATABASE);
	// Correct header name is 'cookie' (singular)
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

	if (event.locals.pb.authStore.isValid) {
		await event.locals.pb.collection("users").authRefresh();
		event.locals.user = structuredClone(event.locals.pb.authStore.model);
	} else {
		event.locals.pb.authStore.clear();
		event.locals.user = null;
	}

	if (event.url.pathname.startsWith("/account") && !event.locals.user) {
		throw redirect(303, "/login");
	}

	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) => allowedHeaders.includes(name.toLowerCase())
	});

	response.headers.set(
		"set-cookie",
		event.locals.pb.authStore.exportToCookie({
			httpOnly: true,
			secure: !dev,
			sameSite: "Lax",
			path: "/"
		})
	);

	return response;
};
