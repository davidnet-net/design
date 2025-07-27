<script lang="ts">
	import { Dropdown, TextField } from "@davidnet/svelte-ui";

	let iconbefore: string = "format_paint";
</script>

<Dropdown
	appearance="primary"
	{iconbefore}
	actions={[
		{ label: "dark", value: "dark" },
		{ label: "light", value: "light" }
	]}
>
	Theme
</Dropdown>

<TextField type="text" placeholder="Valid icon." bind:value={iconbefore}/>