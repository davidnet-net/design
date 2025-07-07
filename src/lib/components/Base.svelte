<script lang="ts">
	import { IconButton, Modal, Space, ThemeMenu } from '@davidnet/svelte-ui';
	import SideNav from '$lib/components/SideNav.svelte';


	let ShowGitModal = false;
	let ShowSideNav = true;
</script>

<nav id="top-nav">
	<div class="nav-left">
		{#if ShowSideNav}
			<IconButton
				appearance="subtle"
				icon="left_panel_close"
				alt="Closes sidebar"
				onClick={() => (ShowSideNav = false)}
			/>
		{:else}
			<IconButton
				appearance="subtle"
				icon="left_panel_open"
				alt="Opens sidebar"
				onClick={() => (ShowSideNav = true)}
			/>
		{/if}
		<a href="https://davidnet.net">
			<img src="/images/logos/DNLogo.png" height="35px" aria-hidden="true" alt="" />
		</a>
		<h3 style="font-family: Merriweather Sans; color: #d52129;">David</h3>
		<h3 style="font-family: Merriweather Sans; color: #2985cd;">net</h3>
		<Space width="var(--token-space-2)" />
		<h3 style="font-family: Merriweather Sans;">-</h3>
		<Space width="var(--token-space-2)" />
		<a href="/">
			<img src="/images/logos/svelte-ui.png" height="30px" aria-hidden="true" alt="" />
		</a>
		<Space width="var(--token-space-1)" />
		<h3 style="font-family: Merriweather Sans;">Design system</h3>
	</div>

	<div class="nav-center">
		<span>(Searchbar)</span>
	</div>

	<div class="nav-right">
		<ThemeMenu />
		<IconButton
			icon="https://design.davidnet.net/images/logos/external/github/github-mark-dark.svg"
			lighticon="https://design.davidnet.net/images/logos/external/github/github-mark-white.svg"
			alt="Github Repository"
			onClick={() => (ShowGitModal = true)}
		/>
	</div>
</nav>

<div id="root">
	{#if ShowSideNav}
		<SideNav></SideNav>
	{/if}
	<main>
		<slot />
	</main>
</div>
{#if ShowGitModal}
	<Modal
		title="Select a repository to visit:"
		titleIcon="fork_right"
		hasCloseBtn={true}
		on:close={() => (ShowGitModal = false)}
		options={[
			{
				appearance: 'primary',
				content: 'Design website',
				onClick: () => (window.location.href = 'https://github.com/davidnet-net/design')
			},
			{
				appearance: 'primary',
				content: 'Design Libary',
				onClick: () => (window.location.href = 'https://github.com/davidnet-net/svelte-ui')
			},
			{
				appearance: 'subtle',
				content: 'Davidnet Organisation',
				onClick: () => (window.location.href = 'https://github.com/davidnet-net/')
			}
		]}
	/>
{/if}

<style>
	#top-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--token-space-1) var(--token-space-2);
		height: 48px;

		background-color: var(--token-color-surface-overlay-normal);
		border-bottom: 1px solid var(--token-color-surface-overlay-pressed);

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}

	.nav-left,
	.nav-center,
	.nav-right {
		display: flex;
		align-items: center;
	}

	.nav-center {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	#root {
		display: flex;
		height: calc(100vh - 48px);
		padding-top: 48px;
		overflow: hidden;
	}

	main {
		flex-grow: 1;
		height: 100%;
		overflow-y: auto; /* vertical scroll if needed */
		padding: var(--token-space-3);
		box-sizing: border-box;
		background-color: var(--token-color-surface-default);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* Scrollbar styling for Firefox */
	main {
		scrollbar-color: var(--token-color-primary) transparent;
	}
</style>
