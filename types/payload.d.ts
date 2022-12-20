type PayloadType<T> = T & {
	id: string;
	updatedAt: DateTime;
	createdAt: DateTime;
};
