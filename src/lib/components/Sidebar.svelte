<script>
	import { Button, LinkButton } from "@davidnet/svelte-ui";
</script>
<nav>
        <LinkButton appearance="subtle-white" iconBefore="" href="/">Home</LinkButton>
        <LinkButton appearance="subtle-white" iconBefore="" href="/Language">Language</LinkButton>
</nav>

<style>
    nav {
        min-height: calc(100vh - 60px);
		position: sticky;
		z-index: 2;
        padding: 4px;
        display: flex;
        flex-direction: column;
        width: 150px;
        border-right: #4b4b4d solid 1px;
        background-color: #181a1b;
    }
</style>