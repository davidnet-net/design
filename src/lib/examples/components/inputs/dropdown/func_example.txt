<script lang="ts">
	import { Dropdown } from "@davidnet/svelte-ui";

	// You cannot select an default value.
	let choice: null | string = null;

	const actions = [
		{ label: "Option A", value: "A" },
		{ label: "Option B", value: "B" },
		{ label: "Option C", value: "C" }
	];

	function handleAction(value: string) {
		choice = value;
	}

	const customActions = actions.map((action) => ({
		...action,
		onClick: () => handleAction(action.value)
	}));
</script>

<p>Selected: {choice}</p>

<Dropdown value={null} actions={customActions} appearance="primary" />
