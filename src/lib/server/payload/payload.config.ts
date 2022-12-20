import { buildConfig } from 'payload/config';
import path from 'path';
import User from './collections/User';
import LandingPage from './globals/Landing';

export default buildConfig({
	serverURL: process.env.PUBLIC_BASE_URL,
	localization: {
		locales: ['de', 'en'],
		defaultLocale: 'de',
		fallback: true
	},
	collections: [User],
	globals: [LandingPage],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts')
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
	}
});
