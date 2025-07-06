<script lang="ts">
  import { Button, LinkButton } from "@davidnet/svelte-ui";
  import { navTree, selectedHref, type NavItem } from "$lib/stores/sidenav";
  import { page } from '$app/stores';

  // Automatically update currentPath based on URL (SvelteKit)
  $: currentPath = $page.url.pathname;

  // Toggle collapsed state immutably for Svelte reactivity
  function toggle(item: NavItem) {
    navTree.update(tree =>
      tree.map(n =>
        n.label === item.label ? { ...n, collapsed: !n.collapsed } : n
      )
    );
  }

  function selectLink(href: string) {
    selectedHref.set(href);
  }
</script>

<nav id="side-nav" aria-label="Side navigation">
  {#each $navTree as item (item.label)}
    <div class="nav-group">
      {#if item.children}
        <Button
          appearance="subtle"
          iconbefore={item.collapsed ? "keyboard_arrow_right" : "keyboard_arrow_down"}
          onClick={() => toggle(item)}
          stretchwidth={true}
          justifycontent="start"
          overidetextcolor="var(--token-color-text-default-secondary)"
          aria-expanded={!item.collapsed}
          aria-controls={item.label + "-list"}
          class="nav-group-button"
        >
          {item.label}
        </Button>

        {#if !item.collapsed}
          <div
            id={item.label + "-list"}
            class="nav-children"
            role="region"
            aria-label={item.label + " submenu"}
          >
            {#each item.children as child (child.label)}
              <LinkButton
                href={child.href}
                appearance={child.href === currentPath ? "primary" : "subtle"}
                justifycontent="start"
                overidetextcolor={child.href === currentPath ? undefined : "var(--token-color-text-default-tertiary)"}
                on:click={() => selectLink(child.href)}
                class="nav-link-button"
              >
                {child.label}
              </LinkButton>
            {/each}
          </div>
        {/if}
      {:else}
        <Button appearance="subtle" class="nav-group-button">{item.label}</Button>
      {/if}
    </div>
  {/each}
</nav>

<style>
  #side-nav {
    width: 260px;
    background: var(--token-color-background-secondary);
    border-right: 1px solid var(--token-color-border-default);
    height: 100vh;
    overflow-y: auto;
    padding: 0.5rem 0.25rem;
    box-sizing: border-box;
  }

  .nav-group {
    margin-bottom: 0.75rem;
  }

  .nav-group-button {
    font-weight: 600;
    font-size: 1rem;
    color: var(--token-color-text-default-secondary);
    text-align: left;
    padding: 0.5rem 1rem;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .nav-group-button:hover,
  .nav-group-button:focus {
    background-color: var(--token-color-background-hover);
    color: var(--token-color-text-default);
  }

  .nav-children {
    margin-left: 1.25rem;
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .nav-link-button {
    font-size: 0.95rem;
    text-align: left;
    padding: 0.35rem 0.75rem;
    color: var(--token-color-text-default-tertiary);
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
  }

  .nav-link-button:hover,
  .nav-link-button:focus {
    background-color: var(--token-color-background-hover);
    color: var(--token-color-text-default);
  }
</style>
