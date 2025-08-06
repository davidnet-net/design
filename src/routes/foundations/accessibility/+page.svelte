<script lang="ts">
	import Base from "$lib/components/Base.svelte";
	import "$lib/styles/page.css"
	import { FlexWrapper, Space } from "@davidnet/svelte-ui";
</script>

<svelte:head>
	<title>Accessibility - Davidnet Design System</title>
	<meta name="description" content="Explains how to integrate Davidnet's Design System. In your sveltekit project." />
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
				<img class="topimage" src="/images/headers/accessibility.svg" height="300px" aria-hidden="true" alt="" />
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<main>
		Yap
	</main>
</Base>