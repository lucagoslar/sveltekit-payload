import type { GlobalConfig } from 'payload/types';

const LandingPage: GlobalConfig = {
	slug: 'landingpage',
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			localized: true
		},
		{
			name: 'description',
			type: 'text',
			required: true,
			localized: true
		}
	]
};

export default LandingPage;
