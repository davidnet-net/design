<script lang="ts">
	import Base from "$lib/components/Base.svelte";
	import { FlexWrapper, Space, CodeBlock, Dropdown, BlockNote, TextField } from "@davidnet/svelte-ui";
	import "$lib/styles/page.css"

	import raw_bindable_example from "$lib/examples/components/inputs/dropdown/binded_example.svelte?raw";
	import raw_func_example from "$lib/examples/components/inputs/dropdown/func_example.svelte?raw";
	import raw_iconbefore_example from "$lib/examples/components/inputs/dropdown/iconbefore.svelte?raw";
	import raw_alwaysshowslot_example from "$lib/examples/components/inputs/dropdown/alwaysshowslot.svelte?raw";

	let choice: string | null = null;
	let choice2: string | null = null;
	let iconbefore: string = "format_paint";

	let appearance: "subtle" | "primary" | "warning" | "danger" | "discover" = "primary";

	const actions = [
		{ label: "Option A", value: "A" },
		{ label: "Option B", value: "B" },
		{ label: "Option C", value: "C" }
	];

	function handleAction(value: string) {
		choice2 = value;
	}

	const customActions = actions.map((action) => ({
		...action,
		onClick: () => handleAction(action.value)
	}));
</script>

<svelte:head
	>``
	<title>Dropdown - Davidnet Design System</title>
	<meta name="description" content="A dropdown allows users to select one option from a list." />
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Dropdown</h1>
					A dropdown allows users to select one option from a list.
				</div>
				<img class="topimage" src="/images/headers/dropdown.png" height="300px" aria-hidden="true" alt="" />
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<FlexWrapper direction="column">
		<main>
			Use an Dropdown to allow users to choose from many options. <br />
			Without overflowing the screen with alot of options.

			<Space height="var(--token-space-3)" />
			<BlockNote title="Default Value" appearance="info">
				Do <b>null</b> for the placeholder in the slot or do an value(In the consuming variable) for an default selection. <br /> for example:
				<b>let choice = 'A'</b>
			</BlockNote>
			<Space height="var(--token-space-3)" />

			<h2>Binding Method</h2>
			Uses on:bind to bind the value of the dropdown to an variable.<br />
			This is recommended if you have multiple inputs that need to be collected from the user at once.
			<Space height="var(--token-space-3)" />
			<div class="example">
				<Dropdown
					appearance="primary"
					actions={[
						{ label: "Choice A", value: "A" },
						{ label: "Choice B", value: "B" },
						{ label: "Choice C", value: "C" }
					]}
					bind:value={choice}>Make an choice!</Dropdown
				>
				<Space height="var(--token-space-3)" />
				<p style="text-align: center">Selected: <b>{choice || "null"}</b></p>
			</div>
			<Space height="var(--token-space-3)" />
			<CodeBlock language="ts" code={raw_bindable_example} />

			<h2>Function Listen Method</h2>
			Calls the provided function onchange. This is recommended if you need directly handle the value change in a function.
			<Space height="var(--token-space-3)" />
			<div class="example">
				<Dropdown value={null} actions={customActions} appearance="primary">Function List</Dropdown>
				<p>Selected: <b>{choice2 || "null"}</b></p>
			</div>
			<Space height="var(--token-space-3)" />
			<CodeBlock language="ts" code={raw_func_example} />
			<Space height="var(--token-space-3)" />
			<BlockNote title="Placeholder" appearance="info">Here we did not provide any slot. So the placeholder will fallback to "Menu".</BlockNote>

			<h2>Always Show Slot</h2>
			The alwaysshowslot prop will show the slot inside the dropdown even if an value is selected.
			<Space height="var(--token-space-3)" />
			<div class="example">
				<Dropdown
					appearance="primary"
					actions={[
						{ label: "dark", value: "dark" },
						{ label: "light", value: "light" }
					]}
					alwaysshowslot
				>
					Theme
				</Dropdown>
			</div>
			<Space height="var(--token-space-3)" />
			<CodeBlock language="ts" code={raw_alwaysshowslot_example} />
			<h2>Icon Before</h2>
			You can also add an icon before the dropdown's placeholder.
			<Space height="var(--token-space-3)" />
			<div class="example">
				<Dropdown
					appearance="primary"
					{iconbefore}
					actions={[
						{ label: "dark", value: "dark" },
						{ label: "light", value: "light" }
					]}>Theme</Dropdown
				>
				<Space height="var(--token-space-3)" />

				<TextField type="text" placeholder="Valid icon." bind:value={iconbefore} />
			</div>
			<Space height="var(--token-space-3)" />
			<CodeBlock language="ts" code={raw_iconbefore_example} />
			<Space height="var(--token-space-3)" />
			<BlockNote
				title="Placeholder"
				appearance="error"
				actions={[
					{
						appearance: "link",
						content: "Icons Foundation",
						href: "/foundations/icons/",
						onClick: () => {}
					}
				]}
			>
				Make sure to give an valid icon.
			</BlockNote>
			<Space height="var(--token-space-3)" />
			<h2>Appearances</h2>
			<Dropdown
				appearance="subtle"
				iconbefore="format_paint"
				actions={[
					{
						label: "subtle",
						onClick: () => {
							appearance = "subtle";
						}
					},
					{
						label: "primary",
						onClick: () => {
							appearance = "primary";
						}
					},
					{
						label: "warning",
						onClick: () => {
							appearance = "warning";
						}
					},
					{
						label: "danger",
						onClick: () => {
							appearance = "danger";
						}
					},
					{
						label: "discover",
						onClick: () => {
							appearance = "discover";
						}
					}
				]}
			>
				Appearance
			</Dropdown>
			<Space height="var(--token-space-3)" />
			<div class="example">
				<Dropdown
					{appearance}
					actions={[
						{ label: "Option A", value: "A" },
						{ label: "Option B", value: "B" }
					]}>{appearance}</Dropdown
				>
			</div>
			<Space height="var(--token-space-3)" />
			<CodeBlock
				language="ts"
				code={`
import { Dropdown } from "@davidnet/svelte-ui"

<Dropdown  appearance="${appearance}" actions={[ { label: "Option A", value: "A" }, { label: "Option B", value: "B" } ]}">${appearance}</Dropdown>
`}
			/>
		</main>
	</FlexWrapper>
</Base>