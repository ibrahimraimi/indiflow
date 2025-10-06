import type { AuthModel } from 'pocketbase';
import type { UsersRecord } from '$lib/types/pocketbase-types';

export type UserAuthModel = (AuthModel & Partial<UsersRecord>) | null;

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		type PocketBase = import('pocketbase').default;
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user: UserAuthModel;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
