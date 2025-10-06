import { pb } from "$lib/pocketbase/client";

export function getUserRole(
	model?: { role?: string } | null
): "customer" | "admin" | "loan_officer" | undefined {
	// Prefer an explicitly provided model (e.g. from SSR load). Fallback to client authStore only in browser.
	const resolvedModel = model ?? (typeof window !== "undefined" ? pb.authStore.model : undefined);

	if (!resolvedModel) {
		return undefined;
	}

	const role = resolvedModel.role as string | undefined;

	if (role === "customer" || role === "admin" || role === "loan_officer") {
		return role;
	}

	return undefined;
}

// Legacy function for backward compatibility (if needed)
export function getUserType(
	model?: { role?: string } | null
): "customer" | "admin" | "loan_officer" | undefined {
	return getUserRole(model ?? null);
}
