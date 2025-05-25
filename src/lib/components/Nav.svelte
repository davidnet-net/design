<script>
	import { IconButton } from "@davidnet/svelte-ui";
</script>

<nav>
	<IconButton appearance="subtle" icon="left_panel_close"></IconButton>
	<img class="logo" src="/Assets/Images/Logos/svelte-ui-cropped.png" alt="" aria-hidden="true" />
</nav>

<style lang="scss">
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: flex-start;
		padding: 4px;
		background-color: #1f1f21;
		height: 40px;
	}

	.logo {
		height: 40px;
		width: 40px;
	}
</style>
