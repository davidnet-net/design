<script lang="ts">
	import Base from "$lib/components/Base.svelte";
	import { FlexWrapper, Space, CodeBlock, Button, Dropdown, toast } from "@davidnet/svelte-ui";

	let appearance: "subtle" | "primary" | "warning" | "danger" | "discover" = "primary";
</script>

<svelte:head
	>``
	<title>Button - Davidnet Design System</title>
	<meta name="description" content="A button triggers an event or action. Its the base of interactivity." />
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>Button</h1>
					A button triggers an event or action. Its the base of interactivity.
				</div>
				<img class="topimage" src="/images/headers/button.svg" height="300px" aria-hidden="true" alt="" />
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<FlexWrapper direction="column">
		<main>
			<h2>Default</h2>
			Use default buttons for most actions that aren't the main call to action for a page or area.
			<Space height="var(--token-space-3)" />
			<div class="example">
				<Button
					onClick={() => {
						toast({
							title: "You clicked me ):",
							icon: "info",
							appearance: "info",
							position: "top-center",
							autoDismiss: 3000
						});
					}}>Button</Button
				>
			</div>
			<Space height="var(--token-space-3)" />
			<CodeBlock
				language="ts"
				code={`
import { Button } from "@davidnet/svelte-ui"

<Button>Button</Button>
        `}
			/>

			<h2>Appearances</h2>
			Use semantic appearances such as "danger" for delete confirmations.<br />
			And "discover" for new things.<br />
			And "primary" for the main action. <br />
			<Space height="var(--token-space-3)" />
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
				<Button {appearance}>{appearance} Button</Button>
			</div>
			<Space height="var(--token-space-3)" />
			<CodeBlock
				language="ts"
				code={`
import { Button } from "@davidnet/svelte-ui"

<Button appearance="${appearance}">${appearance} Button</Button>
        `}
			/>
			<br />
		</main>
	</FlexWrapper>
</Base>

<style>
	.header {
		background-color: var(--token-color-surface-sunken-normal);
	}

	main {
		padding: var(--token-space-6);
		line-height: 1.3;
	}

	h2 {
		font-size: 2rem;
	}

	.topheader {
		max-width: 50%;
		line-height: 1.3;
	}

	.topimage {
		max-width: 25%;
		aspect-ratio: 1 / 1;
		object-fit: contain;
	}

	.example {
		background-color: var(--token-color-surface-sunken-normal);
		width: fit-content;
		padding: var(--token-space-3);
		border-radius: 10px;
	}
</style>
