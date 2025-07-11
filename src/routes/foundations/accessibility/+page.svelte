<script lang="ts">
	import Base from '$lib/components/Base.svelte';
	import { FlexWrapper, Space, CodeBlock, BlockNote } from '@davidnet/svelte-ui';
</script>

<svelte:head>
	<title>Accessibility - Davidnet Design System</title>
	<meta
		name="description"
		content="Explains how to integrate Davidnet's Design System. In your sveltekit project."
	/>
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Accessibility</h1>
					Makes everyone able to interact with Davidnet.
				</div>
				<img
					class="topimage"
					src="/images/headers/accessibility.svg"
					height="300px"
					aria-hidden="true"
					alt=""
				/>
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<main>
		Yap
    </main>
</Base>

<style>
	.header {
		background-color: var(--token-color-surface-sunken-normal);
	}

	main {
		padding: var(--token-space-6);
		white-space: normal;
		white-space: normal;
		word-break: break-word;
		line-height: 1.5;
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

	.nospacing {
		margin: var(--token-space-0);
		padding: var(--token-space-0);
	}

	.nospacing-below {
		margin-bottom: var(--token-space-0);
		padding-bottom: var(--token-space-0);
	}

    .token-back {
        background-color: var(--token-color-surface-sunken-normal);
        padding: 15px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .token-back > div {
        height: 50px;
        width: 150px;
        background-color: red;
    }
</style>
