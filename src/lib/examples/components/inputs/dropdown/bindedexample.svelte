<script lang="ts">
	import { Dropdown } from "@davidnet/svelte-ui";

	// Do null for the placeholder in the <slot> or do an value for an default selection.
	let choice: string | null = null;
</script>

<Dropdown
	actions={[
		{ label: "Choice A", value: "A" },
		{ label: "Choice B", value: "B" },
		{ label: "Choice C", value: "C" }
	]}
	bind:value={choice}
	appearance="primary"
>
	Make an choice!
</Dropdown>

<p>Selected: {choice}</p>
