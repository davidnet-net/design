<script lang="ts">
	import { Center, FlexWrapper } from '@davidnet/svelte-ui';
	import { page } from '$app/state';

	// Related documentation
	// https://svelte.dev/docs/kit/errors
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
</script>

<FlexWrapper>
	<Center x y>

		{#if page.status.toString() === "404"}
			<h1>404</h1>
			<p>We couldn't find the page you're were looking for.</p>
			<p>If this issue persists. Please make an <a href="https://github.com/davidnet-net/design/issues/new/choose">Issue</a></p>
		{:else if page.status.toString() === "500"}
			<h1>500</h1>
			<p>Something wrent wrong on our side.</p>
		{:else}
			<h1>{page.status.toString()}</h1>
			<p>{page.error?.message}</p>
		{/if}
	</Center>
</FlexWrapper>

<style>
	h1 {
		font-size: 15vw;
	}
</style>