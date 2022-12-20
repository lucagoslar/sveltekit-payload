import qs from 'qs';
import { env } from '$env/dynamic/public';

import type { PageServerLoad } from './$types';

import { client } from '$scripts/trcp';
import type { Landingpage } from '$lib/server/payload/payload-types';

export const load: PageServerLoad = async (req) => {
	const parameters = qs.stringify(
		{
			locale: req.params.locale,
			'fallback-locale': 'de',
			depth: 59
		},
		{ addQueryPrefix: true }
	);

	const page = (await (
		await fetch(env.PUBLIC_BASE_URL + '/api/globals/landingpage' + parameters, {
			method: 'GET'
		})
	).json()) as PayloadType<Landingpage>;

	return {
		userCount: await client.users.count.query(),
		page: page
	};
};
