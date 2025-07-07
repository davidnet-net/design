<svelte:head>
	<title>Raw - Davidnet Design</title>
	<meta name="description" content="Displays all elements on a raw page." />
</svelte:head>

<script lang="ts">
	import {
		ThemeMenu,
		Button,
		SplitButton,
		LinkButton,
		IconButton,
		LinkIconButton,
		Modal,
		Space,
		Dropdown,
		toast,
		BlockNote,
		IconDropdown
	} from '@davidnet/svelte-ui';
	let showModal = false;

	function closeModal() {
		showModal = false;
	}

	function showToast(
		Pos:
			| 'bottom-left'
			| 'bottom-center'
			| 'bottom-right'
			| 'top-left'
			| 'top-center'
			| 'top-right' = 'bottom-left',
		appearance:
			| 'info'
			| 'warning'
			| 'danger'
			| 'discover'
			| 'success'
			| 'primary'
			| undefined = 'info'
	) {
		toast({
			title: 'Toasted',
			desc: 'Toast delivered at ' + Pos,
			icon: 'info',
			appearance: appearance,
			position: Pos,
			autoDismiss: 3000
		});
	}

	function onAction1() {
		alert("Action 1 triggered");
	}

	function onAction2() {
		alert("Action 2 triggered");
	}
</script>

<div id="root">
	<ThemeMenu />

	<div class="section">
		<div class="swatch default-normal">
			<span class="label">Default Normal:</span> The quick brown fox
		</div>
		<div class="swatch default-secondary">
			<span class="label">Default Secondary:</span> The quick brown fox
		</div>
		<div class="swatch default-tertiary">
			<span class="label">Default Tertiary:</span> The quick brown fox
		</div>
		<div class="swatch disabled"><span class="label">Disabled:</span> The quick brown fox</div>
	</div>

	<div class="section">
		<div class="swatch inverse-normal">
			<span class="label">Inverse Normal:</span> The quick brown fox
		</div>
		<div class="swatch inverse-secondary">
			<span class="label">Inverse Secondary:</span> The quick brown fox
		</div>
		<div class="swatch inverse-tertiary">
			<span class="label">Inverse Tertiary:</span> The quick brown fox
		</div>
	</div>

	<div class="section">
		<div class="swatch danger"><span class="label">Danger:</span> The quick brown fox</div>
		<div class="swatch warning"><span class="label">Warning:</span> The quick brown fox</div>
		<div class="swatch success"><span class="label">Success:</span> The quick brown fox</div>
		<div class="swatch discover"><span class="label">discover:</span> The quick brown fox</div>
		<div class="swatch information">
			<span class="label">Information:</span> The quick brown fox
		</div>
	</div>

	<h2>Buttons</h2>

	<Button appearance="subtle" onClick={() => console.log('Subtle Button Pressed')}
		>Subtle Button</Button
	>
	<Button appearance="primary" onClick={() => console.log('Primary Button Pressed')}
		>Primary Button</Button
	>
	<Button appearance="warning" onClick={() => console.log('Warning Button Pressed')}
		>Warning Button</Button
	>
	<Button appearance="danger">Danger Button</Button>
	<Button appearance="discover">Discover Button</Button>
	<Button appearance="primary" disabled>Disabled Button</Button>
	<Button loading>Disabled Button</Button>

	<br />
	<Space height="50px" />
	<h2>Button Icons</h2>

	<Button iconbefore="star" appearance="primary">iconbefore</Button>
	<Button iconafter="star" appearance="primary">iconafter</Button>

	<br />
	<Space height="50px" />
	<h2>SplitButton</h2>

	<SplitButton
		appearance="primary"
		onClick={() => console.log('Main clicked')}
		actions={[
			{ label: 'Secondary A', onClick: () => console.log('Clicked A') },
			{ label: 'Secondary B', onClick: () => console.log('Clicked B') }
		]}
	>
		Main
	</SplitButton>

	<br />
	<Space height="50px" />
	<h2>LinkButton</h2>

	<LinkButton href="https://davidnet.net" appearance="primary" iconafter="open_in_new"
		>Link Button</LinkButton
	>

	<br />
	<Space height="50px" />
	<h2>IconButtons</h2>

	<IconButton alt="Test Button" icon="star" appearance="warning"></IconButton>

	<IconButton alt="Disabled Button" icon="star" appearance="warning" disabled></IconButton>

	<IconButton alt="Loading Button" icon="star" appearance="warning" loading></IconButton>

	<br />
	<Space height="50px" />
	<h2>LinkIconButton</h2>

	<LinkIconButton alt="Test Link" href="https://davidnet.net" icon="star" appearance="warning"
	></LinkIconButton>

	<br />
	<Space height="50px" />
	<h2>Modal</h2>

	<Button appearance="discover" onClick={() => (showModal = true)}>Show Modal</Button>

	{#if showModal}
		<Modal
			title="Title?"
			titleIcon="lightbulb"
			desc="Description"
			hasCloseBtn={true}
			on:close={() => (showModal = false)}
			options={[
				{ appearance: 'primary', content: 'Done', onClick: closeModal },
				{ appearance: 'subtle', content: 'Cancel', onClick: closeModal }
			]}
		/>
	{/if}

	<br />
	<Space height="50px" />
	<h2>Dropdown</h2>

	<Dropdown
		appearance="primary"
		iconbefore="menu"
		actions={[
			{ label: 'Optie 1', onClick: () => alert('Actie 1 uitgevoerd!') },
			{ label: 'Optie 2', onClick: () => alert('Actie 2 uitgevoerd!') },
			{ label: 'Optie 3', onClick: () => alert('Optie 3!') }
		]}>Dropdown</Dropdown
	>

	<IconDropdown
		appearance="primary"
		icon="settings"
		alt="Settings menu"
		actions={[
			{ label: "Action 1", onClick: onAction1 },
			{ label: "Action 2", onClick: onAction2 },
			{ label: "Logout", onClick: () => alert("Logged out") },
		]}
	/>


	<br />
	<Space height="50px" />
	<h2>Toasts</h2>

	<Button appearance="primary" onClick={() => showToast('bottom-left', 'info')}
		>Toast - bottom-left</Button
	>
	<Button appearance="warning" onClick={() => showToast('bottom-center', 'warning')}
		>Toast - bottom-center</Button
	>
	<Button appearance="danger" onClick={() => showToast('bottom-right', 'danger')}
		>Toast - bottom-right</Button
	>
	<Button appearance="discover" onClick={() => showToast('top-left', 'discover')}
		>Toast - top-left</Button
	>
	<Button appearance="subtle" onClick={() => showToast('top-center', 'success')}
		>Toast - top-center</Button
	>
	<Button appearance="primary" onClick={() => showToast('top-right', 'primary')}
		>Toast - top-right</Button
	>
	<br />
	<Space height="20px" />
	<br />
	<Space height="20px" />

	<h2>BlockNote</h2>

	<BlockNote
		appearance="info"
		title="The quick brown fox"
		actions={[
			{ appearance: 'primary', content: 'Done', onClick: closeModal },
			{ appearance: 'subtle', content: 'Cancel', onClick: closeModal }
		]}
	>
		The quick brown fox jumps over the lazy dog.
	</BlockNote>
	<Space height="20px" />
	<BlockNote
		appearance="warning"
		title="The quick brown fox"
		actions={[
			{
				appearance: 'link',
				content: 'Done',
				href: 'https://davidnet.net',
				onClick: () => {
					alert('Waah');
				}
			},
			{
				appearance: 'link',
				content: 'Cancel',
				href: 'https://davidnet.net',
				onClick: () => {
					alert('Waah');
				}
			}
		]}
	>
		The quick brown fox jumps over the lazy dog.
	</BlockNote>
	<Space height="20px" />
	<BlockNote
		appearance="error"
		title="The quick brown fox"
		actions={[
			{
				appearance: 'primary',
				content: 'Done',
				href: 'https://davidnet.net',
				onClick: () => {
					alert('Waah');
				}
			},
			{
				appearance: 'subtle',
				content: 'Cancel',
				href: 'https://davidnet.net',
				onClick: () => {
					alert('Waah');
				}
			}
		]}
	>
		The quick brown fox jumps over the lazy dog.
	</BlockNote>
	<br />
	<Space height="50px" />

	<h1 class="MerriweatherSans">Merriweather Sans</h1>
	<p class="MerriweatherSans">The quick brown fox jumps over the lazy dog</p>

	<h1 class="JetBrainsMono">JetBrains Mono</h1>
	<p class="JetBrainsMono">The quick brown fox jumps over the lazy dog</p>

	<h1 class="Inter">Inter</h1>
	<p class="Inter">The quick brown fox jumps over the lazy dog</p>
</div>

<style>
	#root {
		padding: 3rem;
	}

	.swatch {
		margin: 0.5rem 0;
	}

	.label {
		font-weight: bold;
		margin-right: 0.5rem;
		display: inline-block;
		width: 160px;
	}

	.default-normal {
		color: var(--token-color-text-default-normal);
	}
	.default-secondary {
		color: var(--token-color-text-default-secondary);
	}
	.default-tertiary {
		color: var(--token-color-text-default-tertiary);
	}
	.inverse-normal {
		background: var(--token-color-surface-inverse-raised-normal);
		color: var(--token-color-text-inverse-normal);
		padding: 0.25rem 0.5rem;
		border-radius: 5px;
	}
	.inverse-secondary {
		background: var(--token-color-surface-inverse-raised-normal);
		color: var(--token-color-text-inverse-secondary);
		padding: 0.25rem 0.5rem;
		border-radius: 5px;
	}
	.inverse-tertiary {
		background: var(--token-color-surface-inverse-raised-normal);
		color: var(--token-color-text-inverse-tertiary);
		padding: 0.25rem 0.5rem;
		border-radius: 5px;
	}
	.danger {
		color: var(--token-color-text-danger);
	}
	.warning {
		color: var(--token-color-text-warning);
	}
	.success {
		color: var(--token-color-text-success);
	}
	.discover {
		color: var(--token-color-text-discover);
	}
	.information {
		color: var(--token-color-text-information);
	}
	.disabled {
		color: var(--token-color-text-disabled);
	}

	.section {
		margin-bottom: 2rem;
	}

	.MerriweatherSans {
		font-family: Merriweather Sans;
	}

	.JetBrainsMono {
		font-family: JetBrains Mono;
	}

	.Inter {
		font-family: Inter;
	}
</style>
