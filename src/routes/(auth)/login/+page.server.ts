import { redirect, type Actions, fail } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";
import type { LoginBody } from "../auth";

const AUTHENTICATED_USER_ROUTE = "/";
const UNVERIFIED_ERROR = "Please verify your account, check your email.";

type ErrorResponse = {
	success: false;
	redirectUrl: string | undefined;
	errorMessage: string;
	form: Partial<LoginBody>;
};
type SuccessResponse = { success: true; redirectUrl: string | undefined; message: string };

function handleError(err: Error, form: Partial<LoginBody>): ErrorResponse {
	console.error("Error:", err);

	if (err instanceof ClientResponseError) {
		switch (err.status) {
			case 400:
				return {
					success: false,
					redirectUrl: undefined,
					errorMessage: "Invalid email or password",
					form
				};
			case 403:
				return { success: false, redirectUrl: undefined, errorMessage: "Access forbidden", form };
			default:
				return {
					success: false,
					redirectUrl: undefined,
					errorMessage: "An error occurred during login",
					form
				};
		}
	}

	return { success: false, redirectUrl: undefined, errorMessage: err.message, form };
}

export const actions: Actions = {
	async default({ locals, request }) {
		const bodyRaw = Object.fromEntries(await request.formData()) as unknown;
		const body = bodyRaw as LoginBody;

		try {
			await locals.pb.collection("users").authWithPassword(body.id, body.password);

			if (!locals.pb.authStore.model.verified) {
				locals.pb.authStore.clear();
				return {
					success: false,
					redirectUrl: "/verify-email",
					errorMessage: UNVERIFIED_ERROR,
					form: body
				};
			}

			const successResponse: SuccessResponse = {
				success: true,
				redirectUrl: AUTHENTICATED_USER_ROUTE,
				message: "Successfully logged in"
			};

			return successResponse;
		} catch (err) {
			const errorResponse = handleError(err as Error, body);
			return fail(400, errorResponse);
		}
	}
};

export function load({ locals }) {
	if (locals.user) {
		throw redirect(303, AUTHENTICATED_USER_ROUTE);
	}
}
