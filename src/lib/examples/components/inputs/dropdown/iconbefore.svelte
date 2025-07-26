<script lang="ts">
	import { Dropdown } from "@davidnet/svelte-ui";

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

<!-- TODO - Migrate to Davidnet Input -->
<input type="text" placeholder="Valid icon." bind:value={iconbefore} />
