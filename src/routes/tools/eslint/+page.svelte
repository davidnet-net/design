<script lang="ts">
	import { FlexWrapper, Space, CodeBlock, BlockNote } from "@davidnet/svelte-ui";
	import Base from "$lib/components/Base.svelte";
	import "$lib/styles/page.css"
	import eslint from "$lib/examples/tools/eslint.js?raw";
</script>

<svelte:head>
	<title>ESLint - Davidnet Design System</title>
	<meta name="description" content="Ensures code quality." />
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>ESLint</h1>
					Ensures code quality.
				</div>
				<img class="topimage" src="/images/headers/get-started.png" height="300px" aria-hidden="true" alt="" />
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<FlexWrapper direction="column">
		<main>
            <p>eslint.config.js</p>
			<CodeBlock language="ts" code={eslint} />
		</main>
	</FlexWrapper>
</Base>