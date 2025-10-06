import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

const LOGIN_ROUTE = "/login";

export const load: LayoutServerLoad = async ({ locals, url }) => {
	// Allow public access to home page
	if (url.pathname === "/") {
		return {};
	}

	// All other (app) routes require authentication
	if (!locals.user) {
		throw redirect(303, LOGIN_ROUTE);
	}

	return {};
};
