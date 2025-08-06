<script lang="ts">
	import Base from "$lib/components/Base.svelte";
	import { FlexWrapper, Space } from "@davidnet/svelte-ui";
	import "$lib/styles/page.css";
</script>

<svelte:head>
	<title>Icons - Davidnet Design System</title>
	<meta name="description" content="Explains how icons work in the davidnet design system." />
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Icons</h1>
					Explains how icons work in the davidnet design system.
				</div>
				<img class="topimage" src="/images/headers/icons.svg" height="300px" aria-hidden="true" alt="" />
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<main>
		<h2>Source</h2>
		Icons are sourced from<a href="https://fonts.google.com/icons" target="_blank">Google Material Icons</a>.
		<br />

		<h2>Privacy</h2>
		Instead of making requests to google servers. Icons are hosted on davidnet's servers. So that you are protected from CDN tracking.
		<br />

		<h2>Usage</h2>
		When an component asks for an icon provide the name of the icon as a string.
		<br />
		Click on an icon on <a href="https://fonts.google.com/icons" target="_blank">Google Material Icons</a> and scroll down in the right sidebar. Until
		you see "Icon name".
	</main>
</Base>
