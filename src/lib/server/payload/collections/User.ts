import type { CollectionConfig } from 'payload/dist/collections/config/types';

const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	admin: {
		useAsTitle: 'email'
	},
	fields: []
};

export default Users;
