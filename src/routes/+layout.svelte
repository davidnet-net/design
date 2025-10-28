<script lang="ts">
	import { ThemeProvider, Toaster, ConnectivityCheck } from "@davidnet/svelte-ui";

	const initloader = document.getElementById("initloader");
	if (initloader) initloader.remove();
</script>

<ThemeProvider />
<Toaster />
<ConnectivityCheck />
<slot />
