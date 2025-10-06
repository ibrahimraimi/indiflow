import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	const startTime = Date.now();

	try {
		// Check PocketBase connection
		const pbHealth = await locals.pb.health.check();

		const responseTime = Date.now() - startTime;

		return json({
			status: 'healthy 🟢',
			timestamp: new Date().toISOString(),
			responseTime: `${responseTime}ms`,
			services: {
				pocketbase: pbHealth,
				redis: 'Redis not configured',
				database: 'healthy 🟢'
			},
			version: process.env.npm_package_version || 'unknown'
		});
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		return json(
			{
				status: 'unhealthy',
				timestamp: new Date().toISOString(),
				error: errorMessage,
				services: {
					pocketbase: { status: 'unhealthy', error: errorMessage },
					redis: { status: 'unknown' },
					database: 'unhealthy 🔴'
				}
			},
			{ status: 503 }
		);
	}
};
