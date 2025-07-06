<script lang="ts">
	import { Center, FlexWrapper, Space } from '@davidnet/svelte-ui';
	import { page } from '$app/state';

	// Related documentation
	// https://svelte.dev/docs/kit/errors
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
</script>

<div id="root">
	<FlexWrapper>
		<Center x y>
			{#if page.status.toString() === '404'}
				<h1>404</h1>
				<h2>We couldn't find the page you're were looking for.</h2>
				<p>
					If this issue persists. Please make an <a
						href="https://github.com/davidnet-net/design/issues/new/choose">Issue</a
					>.
				</p>
			{:else if page.status.toString() === '500'}
				<h1>404</h1>
				<h2>We couldn't find the page you're were looking for.</h2>
				<p>
					If this issue persists. Please make an <a
						href="https://github.com/davidnet-net/design/issues/new/choose">Issue</a
					>.
				</p>
			{:else}
				<h1>{page.status.toString()}</h1>
				<h2>Unknown issue</h2>
				<h3>What we know</h3>
				<p>{page.error?.message}</p>
				<p>
					If this issue persists. Please make an <a
						href="https://github.com/davidnet-net/design/issues/new/choose">Issue</a
					>.
				</p>
			{/if}

			<Space height="var(--token-space-6)"></Space>
			<h2>What now?</h2>
			<Space height="var(--token-space-3)"></Space>
			<a href="/">Davidnet - Design</a>
			<Space height="var(--token-space-2)"></Space>
			<a href="https://docs.davidnet.net">Davidnet - Docs</a>
			<Space height="var(--token-space-2)"></Space>
			<a href="https://davidnet.net">Davidnet</a>
			<Space height="var(--token-space-2)"></Space>
			<a href="/raw">Raw</a>
		</Center>
	</FlexWrapper>
</div>

<style>
	* {
		text-align: center;
	}

	#root {
		padding: 3rem;
	}

	h1 {
		font-size: 15vw;
		margin-bottom: var(--token-space-0);
		color: var(--token-color-text-danger);
	}

	h2 {
		font-size: clamp(0px, 5vw);
		margin-bottom: var(--token-space-0);
	}
</style>
