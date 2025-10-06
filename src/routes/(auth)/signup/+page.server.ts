import { redirect } from "@sveltejs/kit";
import type { ClientResponseError } from "pocketbase";

import type { RegistrationBody } from "../auth";

const MIN_PASSWORD_LENGTH = 8;
const VERIFICATION_SUCCESS_ROUTE = "/verify-email";
const AUTHENTICATED_USER_ROUTE = "/dashboard";
const VALID_TYPES = ["customer", "admin"];

type ErrorResponse = { errorMessage: string; form: Partial<RegistrationBody> };

function handleError(err: ClientResponseError, form: RegistrationBody): ErrorResponse {
	console.error(err);
	console.log(err.data);

	if (err.data?.data?.email?.code) {
		return { errorMessage: "Email already exists", form };
	}
	if (err.data?.data?.email?.code) {
		return { errorMessage: "Email already exists", form };
	}

	return { errorMessage: err.message, form };
}

async function createAndVerifyUserlocals(
	locals: App.Locals,
	body: RegistrationBody,
	type: string
): Promise<void> {
	// Set default role to 'customer' for regular users, or 'admin' if explicitly specified
	const role = type === "admin" ? "admin" : "customer";
	const userData = { ...body, role };
	await locals.pb.collection("users").create(userData);
	await locals.pb.collection("users").requestVerification(userData.email);
}

export const actions = {
	async default({ locals, request, params }) {
		const type = (params as unknown as { type?: string }).type;
		const bodyRaw = Object.fromEntries(await request.formData()) as unknown;
		const body = bodyRaw as RegistrationBody;

		if (
			!body.firstname ||
			!body.lastname ||
			!body.email ||
			!body.phone ||
			!body.password ||
			!body.passwordConfirm
		) {
			return { errorMessage: "All fields are required" };
		}

		if (body.password !== body.passwordConfirm) {
			return { errorMessage: "Passwords do not match", form: body };
		}

		if (body.password.length < MIN_PASSWORD_LENGTH) {
			return {
				errorMessage: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
				form: body
			};
		}

		// Default to 'customer' role for regular signups (type will be undefined for /signup route)
		const userType = type || "customer";

		try {
			await createAndVerifyUserlocals(locals, body, userType);
		} catch (error) {
			return handleError(error as ClientResponseError, body);
		}

		redirect(303, `${VERIFICATION_SUCCESS_ROUTE}${body.email ? `?email=${body.email}` : ""}`);
	}
};

export function load({ locals, params }) {
	const type = (params as unknown as { type?: string }).type;

	if (locals.user) {
		throw redirect(303, AUTHENTICATED_USER_ROUTE);
	}

	// if (!type || !VALID_TYPES.some((VALID_TYPES) => type.includes(VALID_TYPES))) {
	// 	throw redirect(303, "/signup");
	// }
}
