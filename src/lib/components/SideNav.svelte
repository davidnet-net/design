<script lang="ts">
  import { Button, LinkButton, Space } from "@davidnet/svelte-ui";
  import { navTree, selectedHref, type NavItem } from "$lib/stores/sidenav";
  import { page } from '$app/stores';

  $: currentPath = $page.url.pathname;

  // Recursively flatten tree to array with depth, skipping collapsed children
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
    return tree.map(item => {
      if (item.label === targetLabel) {
        return { ...item, collapsed: !item.collapsed };
      }
      if (item.children) {
        return { ...item, children: toggleItem(item.children, targetLabel) };
      }
      return item;
    });
  }

  function toggle(item: NavItem) {
    navTree.update(tree => toggleItem(tree, item.label));
  }

  function selectLink(href: string | undefined) {
    if (href) selectedHref.set(href);
  }
</script>

<nav id="side-nav" aria-label="Side navigation">
  <Space height="var(--token-space-4"></Space>
  {#each flatNav as item (item.label)}
    <div style="padding-left: {item.depth * 1.25}rem;">
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
      {:else if item.href}
        <LinkButton
          href={item.href}
          appearance={item.href === currentPath ? "primary" : "subtle"}
          justifycontent="start"
          stretchwidth={true}
          overidetextcolor={item.href === currentPath ? undefined : "var(--token-color-text-default-tertiary)"}
          on:click={() => selectLink(item.href)}
          class="nav-link-button"
        >
          {item.label}
        </LinkButton>
      {:else}
        <Button
          appearance="subtle"
          stretchwidth={true}
          justifycontent="start"
          class="nav-group-button"
        >
          {item.label}
        </Button>
      {/if}
    </div>
  {/each}
</nav>
