import type { CollectionConfig } from 'payload/dist/collections/config/types';

const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	admin: {
		useAsTitle: 'email'
	},
	access: {
		read: () => true
	},
	fields: []
};

export default Users;
