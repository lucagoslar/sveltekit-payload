import qs from 'qs';
import { env } from '$env/dynamic/public';

import type { PageServerLoad } from './$types';

import { client } from '$scripts/trcp';
import type { Landingpage } from '$lib/server/payload/payload-types';

export const load: PageServerLoad = async (event) => {
	const parameters = qs.stringify(
		{
			locale: event.params.locale,
			'fallback-locale': 'de',
			depth: 59
		},
		{ addQueryPrefix: true }
	);

	const page = (await (
		await event.fetch(env.PUBLIC_BASE_URL + '/api/globals/landingpage' + parameters, {
			method: 'GET'
		})
	).json()) as PayloadType<Landingpage>;

	return {
		userCount: await client(event).users.count.query(),
		page: page
	};
};
