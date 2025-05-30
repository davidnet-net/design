<svelte:head>
  <title>Davidnet - Design System</title>
  <meta name="description" content="With Svelte-UI you can create Davidnet interfaces using flexible and advanced building bricks." />
</svelte:head>


<script lang="ts">
	import Root from "$lib/components/Root.svelte";
	import { CenterX, Gap, ImageCard } from "@davidnet/svelte-ui";
</script>

<Root>
	<Gap height="80px"></Gap>
	<CenterX>
		<div>
			<h1>Language & Content</h1>
			<p>Content guidance outlines the voice and tone for our design system.<br />We aim to use clear, concise, and inclusive language that's easy for everyone to understand and use.</p>
		</div>
		<Gap width="1rem"></Gap>
		<img height="200rem" width="200rem" src="/Assets/Images/MaterialIcons/translate_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="" aria-hidden="true">
	</CenterX>
</Root>

<style>
	h1 {
		color: #bfc1c4;
		font-family: "Open Sans";
		font-size: 3.25rem;
		padding: 0px;
		margin-bottom: 0px;
		font-weight: 600
	}

	h2 {
		color: #bfc1c4;
		font-family: "Open Sans";
		font-size: 2.25rem;
		padding: 0px;
		margin-bottom: 0px;
		font-weight: 500
	}

	p {
		color: #bfc1c4;
		font-family: "Open Sans";s
		font-weight: 500;
		font-size: 1.1rem;
	}
</style>