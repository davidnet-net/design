<script lang="ts">
	import { ThemeProvider, Toaster, ConnectivityCheck } from "@davidnet/svelte-ui";
</script>

<ThemeProvider />
<Toaster />
<ConnectivityCheck />
<slot />
