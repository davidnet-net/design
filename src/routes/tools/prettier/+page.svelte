<script lang="ts">
	import { FlexWrapper, Space, CodeBlock } from "@davidnet/svelte-ui";
	import Base from "$lib/components/Base.svelte";
	import "$lib/styles/page.css";
	import prettier from "$lib/examples/tools/prettier.txt?raw";
</script>

<svelte:head>
	<title>Prettier - Davidnet Design System</title>
	<meta name="description" content="Makes sure that code style is consistent." />
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Prettier</h1>
					Makes sure that code style is consistent.
				</div>
				<img class="topimage" src="/images/logos/external/prettier.png" height="300px" aria-hidden="true" alt="" />
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<FlexWrapper direction="column">
		<main>
			<p>.prettierrc</p>
			<CodeBlock language="ts" code={prettier} />
		</main>
	</FlexWrapper>
</Base>
