<script lang="ts">
	import Base from "$lib/components/Base.svelte";
	import { FlexWrapper, Space, CodeBlock } from "@davidnet/svelte-ui";
</script>

<svelte:head>
	<title>Get started - Davidnet Design System</title>
	<meta name="description" content="Tokens make it easy to make design consistent." />
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Tokens</h1>
					Tokens make it easy to make design consistent.
				</div>
				<img
					class="topimage"
					src="/images/headers/tokens.png"
					height="300px"
					aria-hidden="true"
					alt=""
				/>
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<main>
		Tokens are essential for maintaining design consistency. <br /> They leverage CSS variables
		to enable easy theming across projects. <br /> Initially defined as JSON, these tokens are
		then converted into CSS variables, making them seamlessly usable in code.

		<Space height="var(--token-space-6)" />
		<div>
			<div class="token-back">
				<CodeBlock language="ts" code="token.color.?" />
				<div></div>
			</div>
		</div>
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

	.topheader {
		max-width: 50%;
		line-height: 1.3;
	}

	.topimage {
		max-width: 25%;
		aspect-ratio: 1 / 1;
		object-fit: contain;
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
