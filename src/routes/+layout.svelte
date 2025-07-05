<script lang="ts">
	import { ThemeProvider } from '@davidnet/svelte-ui';
    import '../global.css';
</script>

<!--? Long white to dark switch could be due transition effect in css ?-->
<ThemeProvider defaultTheme="dark" />
<slot />