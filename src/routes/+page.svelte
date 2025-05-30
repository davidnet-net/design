<svelte:head>
  <title>Davidnet - Design System</title>
  <meta name="description" content="With Svelte-UI you can create Davidnet interfaces using flexible and advanced building bricks." />
</svelte:head>


<script lang="ts">
	import Root from "$lib/components/Root.svelte";
	import { CenterX, Gap, ImageCard } from "@davidnet/svelte-ui";
</script>

<Root>
	<CenterX><h1>Design with clarity</h1></CenterX>
	<CenterX><h2>Build interfaces in minutes</h2></CenterX>
	<Gap height="30px"></Gap>
	<CenterX><p>Create Davidnet interfaces using flexible and advanced building bricks.</p></CenterX>
	<Gap height="30px"></Gap>
	<CenterX gap="20px">
		<a href="Accessibility" style="text-decoration: none;">
			<ImageCard image="/Assets/Images/MaterialIcons/accessibility_new_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="" title="Accessibility">Enable everyone to use Davidnet.</ImageCard>
		</a>
		<a href="Language" style="text-decoration: none;">
			<ImageCard image="/Assets/Images/MaterialIcons/translate_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="" title="Language">Clear, easy, concise and inclusive language to make the experience as best as possible.</ImageCard>	
		</a>
	</CenterX>
</Root>

<style>
	h1 {
		color: #bfc1c4;
		font-family: "Open Sans";
		font-size: 5.25rem;
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