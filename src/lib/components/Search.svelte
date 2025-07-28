<script lang="ts">
	import { onMount } from "svelte";
	import { TextField } from "@davidnet/svelte-ui";
	import lunr from "lunr";

	let query = "";
	let results: any[] = []; // eslint-disable-line @typescript-eslint/no-explicit-any
	let idx: lunr.Index | null = null;
	let docs: any[] = []; // eslint-disable-line @typescript-eslint/no-explicit-any
	export let open = false;

	onMount(async () => {
		const res = await fetch("/search-index.json");
		docs = await res.json();

		idx = lunr(function () {
			this.ref("id");
			this.field("title");
			this.field("description");
			this.field("body");

			docs.forEach((doc) => this.add(doc));
		});
	});

	$: {
		if (idx && query.trim().length > 1 && open) {
			results = idx.search(query).map((m) => docs.find((d) => d.id === m.ref));
		} else {
			results = [];
		}
	}

	function closeSearch() {
		open = false;
		query = "";
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			closeSearch();
		}
	}
</script>

{#if open}
	<div class="overlay" on:click={closeSearch} on:keydown={onKeydown} tabindex="0" aria-modal="true" role="dialog">
		<div class="searchbox" on:click|stopPropagation>
			<p>The searchbar is in BETA</p>
			<TextField id="search-input" type="search" placeholder="Search" bind:value={query} aria-label="Search site" />

			{#if results.length > 0}
				<ul>
					{#each results as result (result.id)}
						<li>
							<a href={result.id.replace("src/routes", "")} on:click={closeSearch}>
								<strong>{result.title}</strong><br />
								<small>{result.description}</small>
							</a>
						</li>
					{/each}
				</ul>
			{:else if query.trim().length > 1}
				<p>No results found for "{query}".</p>
			{/if}
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--token-color-blanket-normal);
		backdrop-filter: blur(4px);
		z-index: 1000;
		padding: var(--token-space-6);
		overflow-y: auto;
		font-family: var(--token-font-main), sans-serif;
	}

	.searchbox {
		background: var(--token-color-surface-overlay-normal);
		color: var(--token-color-text-default-normal);
		padding: var(--token-space-6);
		border-radius: 1rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
		width: 100%;
		max-width: 600px;
	}

	ul {
		margin-top: var(--token-space-4);
		max-height: 60vh;
		overflow-y: auto;
		list-style: none;
		padding: 0;
	}

	li {
		margin-bottom: var(--token-space-4);
	}

	a {
		text-decoration: none;
		color: var(--token-color-text-default-normal);
	}

	a:hover,
	a:focus {
		text-decoration: underline;
	}

	strong {
		font-family: var(--token-font-heading), sans-serif;
	}

	small {
		color: var(--token-color-text-default-secondary);
		font-family: var(--token-font-main), sans-serif;
	}
</style>
