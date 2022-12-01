<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import client from '$lib/global/trpc';
	import { onMount } from 'svelte';
	import type { User } from '$payload/payload-types';

	onMount(async () => {
		client()
			.userById.query('1')
			.then((res) => {
				console.log(res);
			});

		let result: User[] = await (await fetch('/api/users', { method: 'GET' })).json();
		console.log(result);
	});
</script>

<MetaTags title="Example Title" description="Example Description." />

{$LL.HI({ name: 'NULL' })}
