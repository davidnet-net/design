<script lang="ts">
	import Base from '$lib/components/Base.svelte';
	import { FlexWrapper, Space, CodeBlock, BlockNote } from '@davidnet/svelte-ui';
</script>

<svelte:head>
	<title>Get started - Davidnet Design System</title>
	<meta name="description" content="Explains how to integrate Davidnet's Design System. In your sveltekit project."/>
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Get started</h1>
					Explains how to integrate Davidnet's Design System. <br>In your sveltekit project.
				</div>
				<img
					class="topimage"
					src="/images/headers/get-started.png"
					height="300px"
					aria-hidden="true"
					alt=""
				/>
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<div id="root">
		<h2 class="nospacing">Prerequisites</h2>
		<p><a href="https://svelte.dev/">Sveltekit</a> ^5.0.0 project</p>
		<p><a href="https://nodejs.org">NodeJS</a> ^20.18.0</p>
		<p><a href="https://npmjs.com">NPM</a> ^9.2.0</p>
		<h2>Installation</h2>
		<BlockNote appearance="info" title="Notice">
			Do the following in an sveltekit 5 project. <br> Create one using: npx sv create.
		</BlockNote>
		<Space height="var(--token-space-4)"></Space>
		<h3 class="nospacing">Step 1</h3>
		<p>Add the NPM package.</p>
		<CodeBlock language="ts" code={`npm install @davidnet/svelte-ui`} />
		<h3 class="nospacing-below">Step 2</h3>
		<p>Include the root styling in your app.html.</p>
		<CodeBlock language="html" code={`<link rel="stylesheet" href="/global.css">`} />
		<h3 class="nospacing-below">Step 3</h3>
		<p>Include core components in your +layout.svelte.</p>
		<CodeBlock
			language="svelte"
			code={`
<script lang="ts">
	import { ThemeProvider, Toaster, ConnectivityCheck } from '@davidnet/svelte-ui';
</script>

<ThemeProvider />
<Toaster />
<ConnectivityCheck />
<slot />`}
		/>
		<p>You are now ready to start using Davidnet Design System.</p>
	</div>
</Base>

<style>
	.header {
		background-color: var(--token-color-surface-sunken-normal);
	}

	#root {
		padding: var(--token-space-6);
	}

	h2 {
		font-size: 2rem;
	}

	.topheader {
		max-width: 50%;
		line-height: 1.3;
	}

	.topimage {
		max-width: 25%;
		aspect-ratio: 1 / 1;
		object-fit: contain;
	}

	.nospacing {
		margin: var(--token-space-0);
		padding: var(--token-space-0);
	}

	.nospacing-below {
		margin-bottom: var(--token-space-0);
		padding-bottom: var(--token-space-0);
	}
</style>
