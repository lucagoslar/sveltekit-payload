import { buildConfig } from 'payload/config';
import path from 'path';
import User from './collections/User';

export default buildConfig({
	serverURL: process.env.SERVER_URL,
	localization: {
		locales: ['de', 'en'],
		defaultLocale: 'de',
		fallback: true
	},
	collections: [User],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts')
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
	}
});
