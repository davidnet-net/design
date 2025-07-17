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
	<div class="header">
		<FlexWrapper direction="column" width="100%" height="300px">
			<Space height="var(--token-space-6)"></Space>
			<Space height="var(--token-space-6)"></Space>
			<Space height="var(--token-space-3)"></Space>
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
		<FlexWrapper width="100%" justifycontent="start" direction="row" gap="var(--token-space-3)">
				<ImageCard
					src="/images/cards/tokens.svg"
					alt=""
					title="Tokens"
					description="Tokens make it easy to make design consistent."
					href="/foundations/tokens/"
				/>
				<ImageCard
					src="/images/cards/accessibility.svg"
					alt=""
					title="Accessibility"
					description="Designing with accessibility in mind lets everyone use Davidnet."
					href="/foundations/accessibility/"
				/>
		</FlexWrapper>
		<h2>Components</h2>
		<FlexWrapper width="100%" justifycontent="start" direction="row" gap="var(--token-space-3)">
				<ImageCard
					src="/images/cards/button.svg"
					alt=""
					title="Buttons"
					description="A button triggers an event or action. Its the base of interactivity."
					href="/components/button/"
				/>
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
