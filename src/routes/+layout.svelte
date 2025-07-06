<script lang="ts">
	import { ThemeProvider, Toaster, ConnectivityCheck } from '@davidnet/svelte-ui';
    import '../global.css';
</script>

<ThemeProvider/>
<Toaster/>
<ConnectivityCheck/>
<slot />