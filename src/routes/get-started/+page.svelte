<script lang="ts">
	import { FlexWrapper, Space, CodeBlock, BlockNote } from "@davidnet/svelte-ui";
	import Base from "$lib/components/Base.svelte";
	import "$lib/styles/page.css"
	import raw_layoutexample from "$lib/examples/get-started/+layout.svelte?raw";
	import raw_appexample from "$lib/examples/get-started/app.html?raw";
	import raw_bashinstall from "$lib/examples/get-started/bashinstall.sh?raw";
	import optimizeDepsexample from "$lib/examples/get-started/optimizeDeps.ts?raw";
	import viteconfigexample from "$lib/examples/get-started/viteconfig.ts?raw";
</script>

<svelte:head>
	<title>Get started - Davidnet Design System</title>
	<meta name="description" content="Explains how to integrate Davidnet's Design System. In your sveltekit project." />
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Get started</h1>
					Explains how to integrate Davidnet's Design System.<br />In your sveltekit project.
				</div>
				<img class="topimage" src="/images/headers/get-started.png" height="300px" aria-hidden="true" alt="" />
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<FlexWrapper direction="column">
		<main>
			<h2 class="nospacing">Prerequisites</h2>
			<a href="https://svelte.dev/">Sveltekit</a> ^5.0.0 project
			<br>
			<a href="https://nodejs.org">NodeJS</a> ^20.18.0
			<br>
			<a href="https://npmjs.com">NPM</a> ^9.2.0
			<br>
			<h2>Installation</h2>
			<BlockNote appearance="info" title="Notice">
				Do the following in an sveltekit 5 project. <br /> Create one using: <b>npx sv create</b>.
			</BlockNote>
			<Space height="var(--token-space-4)"></Space>
			<h3 class="nospacing">Step 1</h3>
			<p>Add the NPM package.</p>
			<CodeBlock language="ts" code={raw_bashinstall} />
			<h3 class="nospacing-below">Step 2</h3>
			<p>Include the root styling in your app.html.</p>
			<CodeBlock language="html" code={raw_appexample} />
			<h3 class="nospacing-below">Step 3</h3>
			<p>Include core components in your +layout.svelte.</p>
			<CodeBlock language="svelte" code={raw_layoutexample} />
			<h3 class="nospacing-below">Step 4</h3>
			<p>Add @davidnet/svelte-ui to Vite Optimize Exclude.</p>
			<CodeBlock language="ts" code={optimizeDepsexample} />
			<p>An full example how that snippet would fit inside vite.config.ts.</p>
			<CodeBlock language="ts" code={viteconfigexample} />
			<p>You are now ready to start using Davidnet Design System.</p>
			<Space height="var(--token-space-1)"/>
			<h3>Extra Tools</h3>
			The design system also features code quality guidelines.
			<br>
			These guidelines are represented trough ESLint and Prettier configs.
			<br>
			View the following pages:
			<br>
			<a href="/tools/eslint/">DDS - ESLint</a>
			<br>
			<a href="/tools/prettier/">DDS - Prettier</a>
		</main>
	</FlexWrapper>
</Base>