<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';
	import Image from '$assets/bigben.avif?width=200&format=jpg&metadata';

	import { client } from '$scripts/trcp';

	export let data: PageData;

	onMount(async () => {
		console.log(await client.ping.query());
	});
</script>

<MetaTags title={data.page.title} description={data.page.description} nofollow noindex />

<p>
	{$LL.HI({ name: 'NULL' })}
</p>

<p>
	{data.userCount} user(-s)
</p>

<img src={Image.src} width={Image.width} height={Image.height} alt="Big Ben" />
