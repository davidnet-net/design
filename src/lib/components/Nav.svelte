<script lang="ts">
	import { IconButton, LinkIconButton, Gap } from "@davidnet/svelte-ui";
	import { sidebarOpen } from "$lib/stores/sidebar";

	function toggleSidebar() {
		console.log("Toggling sidebar");
		sidebarOpen.update((v: boolean) => !v);
	}
</script>

<nav>
	<div>
		<IconButton
			onClick={toggleSidebar}
			appearance="subtle-white"
			iconsize="28px"
			icon={$sidebarOpen ? "left_panel_close" : "left_panel_open"}
			alt={$sidebarOpen ? "Close menu" : "Open menu"}
		/>

		<Gap height="40px" width="20px"></Gap>
		<a href="/"
			><img
				class="logo"
				src="/Assets/Images/Logos/svelte-ui-cropped.png"
				alt=""
				aria-hidden="true"
			/></a
		>

		<Gap height="40px" width="10px"></Gap>
		<a href="/"><span>Svelte-UI</span></a>
		<Gap height="40px" width="20px"></Gap>
		<a href="/"  ><span class="dd">Davidnet - Design System</span></a>
		
	</div>
	<div>Searchbar placeholder</div>
	<div>
		<LinkIconButton
			href="https://davidnet.net"
			icon="/Assets/Images/Logos/DNLogo.png"
			appearance="subtle"
		></LinkIconButton>
		<LinkIconButton
			href="https://github.com/davidnet-net/svelte-ui"
			icon="/Assets/Images/Logos/External/Github/github-mark-white.svg"
			appearance="subtle"
		></LinkIconButton>
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		z-index: 2;

		height: 40px;
		background-color: #1f1f21;

		width: calc(100% - 8px);
		padding: 4px;
		border-bottom: #4b4b4d solid 1px;
	}

	nav > div {
		display: flex;
		align-items: center;
		align-content: flex-start;
	}

	nav > div:nth-child(2) {
		margin: 0 auto;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.logo {
		height: 35px;
		width: 35px;
		font-size: 35px;
	}

	span {
		color: white;
		font-family: "Open Sans", sans-serif;
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -2px;
	}

	a {
		text-decoration: none;
	}

	.dd {
		color: orange;
		font-family: "Open Sans", sans-serif;
		font-size: 18px;
		font-weight: 350;
		letter-spacing: 0px;
	}
</style>
