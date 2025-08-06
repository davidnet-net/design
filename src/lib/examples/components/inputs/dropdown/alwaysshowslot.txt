<script lang="ts">
	import { Dropdown } from "@davidnet/svelte-ui";
</script>

<Dropdown
	appearance="primary"
	actions={[
		{ label: "dark", value: "dark" },
		{ label: "light", value: "light" }
	]}
	alwaysshowslot>Theme</Dropdown
>
