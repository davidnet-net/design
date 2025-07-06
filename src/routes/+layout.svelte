<script lang="ts">
	import { ThemeProvider, Toaster } from '@davidnet/svelte-ui';
    import '../global.css';
</script>

<ThemeProvider/>
<Toaster/>
<slot />