<script lang="ts">
	import { Button, LinkButton, Space, metadata as svelteui_metadata } from "@davidnet/svelte-ui";
	import { navTree, selectedHref, type NavItem } from "$lib/stores/sidenav";
	import { metadata } from "$lib/metadata";
	import { page } from "$app/state";
	import { goto } from "$app/navigation";

	let currentPath = page.url.pathname;

	// Flatten met depth, alleen kinderen als niet collapsed
	function flatten(tree: NavItem[], depth = 0): (NavItem & { depth: number })[] {
		let result: (NavItem & { depth: number })[] = [];
		for (const item of tree) {
			result.push({ ...item, depth });
			if (item.children && !item.collapsed) {
				result = result.concat(flatten(item.children, depth + 1));
			}
		}
		return result;
	}

	$: flatNav = flatten($navTree);

	function toggleItem(tree: NavItem[], targetLabel: string): NavItem[] {
		return tree.map((item) => {
			if (item.label === targetLabel) {
				return { ...item, collapsed: !item.collapsed };
			}
			if (item.children) {
				return { ...item, children: toggleItem(item.children, targetLabel) };
			}
			return item;
		});
	}

	// Navigeren bij klikken op link
	function navigate(item: NavItem) {
		if (item.href) {
			selectedHref.set(item.href);
			goto(item.href);
		}
	}

	// Format commitdates
	const commitdate_svelteui = new Intl.DateTimeFormat(undefined, {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZoneName: "short"
	}).format(new Date(svelteui_metadata.commitDate));

	const commitdate = new Intl.DateTimeFormat(undefined, {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZoneName: "short"
	}).format(new Date(metadata.commitDate));
</script>

<div id="sidebar-container">
	<nav id="side-nav" aria-label="Side navigation">
		<Space height="var(--token-space-4)"></Space>
		{#each flatNav as item (item.label)}
			<div style="padding-left: {item.depth * 1.25}rem;">
				{#if item.children}
					<Button
						appearance="subtle"
						iconbefore={item.collapsed ? "keyboard_arrow_right" : "keyboard_arrow_down"}
						on:click={() => navTree.update((tree) => toggleItem(tree, item.label))}
						stretchwidth={true}
						justifycontent="start"
						overidetextcolor="var(--token-color-text-default-secondary)"
					>
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<span
							style="cursor: pointer"
							on:click|stopPropagation={() => {
								navTree.update((tree) => toggleItem(tree, item.label));
								if (item.href) navigate(item);
							}}
						>
							{item.label}
						</span>
					</Button>
				{:else if item.href}
					<LinkButton
						href={item.href}
						appearance={item.href === currentPath ? "primary" : "subtle"}
						justifycontent="start"
						stretchwidth
						overidetextcolor={item.href === currentPath
							? undefined
							: "var(--token-color-text-default-tertiary)"}
						on:click={() => navigate(item)}
					>
						{item.label}
					</LinkButton>
				{:else}
					<Button
						appearance="subtle"
						stretchwidth
						justifycontent="start"
						on:click={() => navTree.update((tree) => toggleItem(tree, item.label))}
					>
						{item.label}
					</Button>
				{/if}
			</div>
		{/each}
	</nav>
	<div id="bottom-info">
		<div id="design-info">
			<div>
				<a class="topurl" target="_blank" href={metadata.repoUrl}>design.davidnet.net</a>
			</div>
			<br />
			<div class="data">
				<a class="data-url" target="_blank" href={metadata.commitUrl}
					>{metadata.commitHash}</a
				>
				| {commitdate}
			</div>
		</div>
		<br />
		<div class="full-width-line-wrapper">
			<div class="line"></div>
		</div>

		<br />
		<div id="svelte-ui-info">
			<div>
				<a class="topurl" target="_blank" href={svelteui_metadata.repoUrl}
					>@davidnet/svelte-ui</a
				>
			</div>
			<br />
			<div class="data">
				{svelteui_metadata.version} |
				<a class="data-url" target="_blank" href={svelteui_metadata.commitUrl}
					>{svelteui_metadata.commitHash}</a
				>
				| {commitdate_svelteui}
			</div>
		</div>
	</div>
</div>

<style>
	#sidebar-container {
		display: flex;
		flex-direction: column;
		height: calc(100vh - 48px);
		height: calc(100dvh - 48px);
		width: fit-content;
		background: var(--token-color-surface-overlay-normal);
		border-right: 1px solid var(--token-color-surface-overlay-pressed);
	}

	#side-nav {
		flex-grow: 1;
		overflow-y: auto;
		padding: 0.5rem 0.25rem;
		box-sizing: border-box;
	}

	#bottom-info {
		padding: 0.5rem 1rem;
		font-size: 0.75rem;
		color: var(--token-color-text-default-secondary);
		border-top: 1px solid var(--token-color-surface-overlay-pressed);
		user-select: text;
		white-space: nowrap;
		text-align: center;
	}

	.full-width-line-wrapper {
		margin: 0 -1rem;
	}

	.line {
		height: 1px;
		background-color: var(--token-color-surface-overlay-pressed);
		width: 100%;
	}

	.topurl {
		color: var(--token-color-text-default-secondary);
	}

	.data {
		color: var(--token-color-text-default-tertiary);
	}

	.data-url {
		color: var(--token-color-text-default-tertiary);
	}
</style>
