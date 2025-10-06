import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

const DASHBOARD_ROUTE = "/dashboard";
const LOGIN_ROUTE = "/login";

export const load: LayoutServerLoad = async ({ locals }) => {
	const user = locals.user as { role?: string } | null | undefined;

	// Not authenticated → send to login
	if (!user) {
		throw redirect(303, LOGIN_ROUTE);
	}

	// Authenticated but not admin → send to customer dashboard
	if (user.role !== "admin") {
		throw redirect(303, DASHBOARD_ROUTE);
	}

	// Admin can proceed
	return {};
};
