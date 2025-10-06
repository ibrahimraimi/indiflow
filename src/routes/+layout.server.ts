import type { LayoutServerLoad } from './$types';
import type { UserAuthModel } from '../app';

export type OutputType = { user: object; isLoggedIn: boolean };

export const load: LayoutServerLoad = async ({ locals, request }) => {
	const userAgent = request.headers.get('user-agent')?.toLowerCase();
	const mobileHint = request.headers.get('sec-ch-ua-mobile');

	const mobileHeaders = !!(
		(userAgent && (userAgent.includes('mobi') || userAgent.includes('tablet'))) ||
		(mobileHint && mobileHint === '?1')
	);

	const user: UserAuthModel | undefined = locals.user;

	if (user) {
		return { user, isLoggedIn: true, mobileHeaders };
	}

	return {
		user: undefined,
		isLoggedIn: false,
		mobileHeaders
	};
};
