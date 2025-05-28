<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { sidebarOpen } from "$lib/stores/sidebar";
</script>

<Nav />

<div>
  {#if $sidebarOpen}
    <Sidebar />
    <article style="min-width: calc(100vw - 135px);">
      <slot />
    </article>
  {:else}
    <article style="min-width: calc(100vw - 10px);">
      <slot />
    </article>
  {/if}
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
</style>