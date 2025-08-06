<script lang="ts">
	import Base from "$lib/components/Base.svelte";
	import { FlexWrapper, Space, CodeBlock } from "@davidnet/svelte-ui";
	import "$lib/styles/page.css";
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
				<img class="topimage" src="/images/headers/tokens.png" height="300px" aria-hidden="true" alt="" />
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<main>
		Tokens are essential for maintaining design consistency. <br /> They leverage CSS variables to enable easy theming across projects. <br />
		Initially defined as JSON, these tokens are then converted into CSS variables, making them seamlessly usable in code.

		<Space height="var(--token-space-6)" />
		<div>
			<div class="token-back">
				<CodeBlock language="ts" code="token.color.?" />
				<div></div>
			</div>
		</div>
	</main>
</Base>
