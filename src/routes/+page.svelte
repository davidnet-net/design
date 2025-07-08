<script lang="ts">
	import Base from '$lib/components/Base.svelte';
	import { FlexWrapper, Space, CodeBlock, BlockNote, ImageCard } from '@davidnet/svelte-ui';
</script>

<svelte:head>
	<title>Davidnet - Design System</title>
	<meta
		name="description"
		content="Explains how to use the building blocks for davidnet's advanced UI."
	/>
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%" height="300px">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Svelte-UI</h1>
					The building blocks for davidnet's advanced UI.
				</div>
				<img
					class="topimage"
					src="/images/logos/svelte-ui.png"
					height="150px"
					aria-hidden="true"
					alt=""
				/>
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<main>
		<h2>Foundations</h2>
		<FlexWrapper width="100%">
			<div>
				<ImageCard
					src="/images/test.svg"
					alt="Sample image"
					title="Exciting Title"
					description="A short but compelling description goes here."
					href="/foundations/"
				/>
			</div>
		</FlexWrapper>
	</main>
</Base>

<style>
	.header {
		background-color: var(--token-color-surface-sunken-normal);
	}

	main {
		padding: var(--token-space-6);
	}

	h2 {
		font-size: 2rem;
	}

	.topheader {
		max-width: 50%;
		line-height: 1.3;
	}

	.topimage {
		max-width: 25%;
		aspect-ratio: 1 / 1;
		object-fit: contain;
	}

	.ad {
		margin: var(--token-space-2);
		padding: var(--token-space-0);
		font-size: 5vw;
	}
	.nospacing {
		margin: var(--token-space-0);
		padding: var(--token-space-0);
	}

	.nospacing-below {
		margin-bottom: var(--token-space-0);
		padding-bottom: var(--token-space-0);
	}
</style>
