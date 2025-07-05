<script lang="ts">
	import { ThemeMenu, Button, SplitButton, LinkButton, IconButton, LinkIconButton, Modal, Space, Dropdown } from '@davidnet/svelte-ui';
	let showModal = false;

	function closeModal() {
		showModal = false;
	}

</script>
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
	<div class="swatch information"><span class="label">Information:</span> The quick brown fox</div>
</div>

<Button appearance="subtle">Subtle Button</Button>
<Button appearance="primary">Primary Button</Button>
<Button appearance="warning">Warning Button</Button>
<Button appearance="danger">Danger Button</Button>
<Button appearance="discover">Discover Button</Button>
<Button appearance="primary" disabled={true}>Disabled Button</Button>
<Button loading={true}>Disabled Button</Button>

<br>
<Space height="50px"/>

<Button iconbefore="star" appearance="primary">
	iconbefore
</Button>

<Button iconafter="star" appearance="primary">
	iconafter
</Button>

<br>
<Space height="50px"/>

<SplitButton
    appearance="primary"
    onClick={() => console.log('Main clicked')}
    actions={[
        { label: "Secondary A", onClick: () => console.log("Clicked A") },
        { label: "Secondary B", onClick: () => console.log("Clicked B") }
    ]}>
    Main
</SplitButton>


<br>
<Space height="50px"/>

<LinkButton href="https://davidnet.net" appearance="primary" iconafter="open_in_new">Link Button</LinkButton>

<br>
<Space height="50px"/>

<IconButton alt="Test Button" icon="star" appearance="warning"></IconButton>

<IconButton alt="Disabled Button" icon="star" appearance="warning" disabled></IconButton>

<br>
<Space height="50px"/>

<LinkIconButton alt="Test Link" href="https://davidnet.net" icon="star" appearance="warning"></LinkIconButton>

<br>
<Space height="50px"/>

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

<br>
<Space height="50px"/>


<Dropdown
  label="Kies een optie"
  appearance="primary"
  iconbefore="menu"
  actions={[
    { label: 'Optie 1', onClick: () => alert('Actie 1 uitgevoerd!') },
    { label: 'Optie 2', onClick: () => alert('Actie 2 uitgevoerd!') },
    { label: 'Optie 3', onClick: () => alert('Optie 3!') }
  ]}
/>

<br>
<Space height="50px"/>

<h1 class="MerriweatherSans">Merriweather Sans</h1>
<p class="MerriweatherSans">The quick brown fox jumps over the lazy dog</p>

<h1 class="JetBrainsMono">JetBrains Mono</h1>
<p class="JetBrainsMono">The quick brown fox jumps over the lazy dog</p>

<h1 class="Inter">Inter</h1>
<p class="Inter">The quick brown fox jumps over the lazy dog</p>





































<style>
	:global(body) {
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
