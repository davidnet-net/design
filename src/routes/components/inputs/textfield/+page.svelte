<script lang="ts">
	import Base from "$lib/components/Base.svelte";
	import { FlexWrapper, Space, TextField } from "@davidnet/svelte-ui";
	import "$lib/styles/page.css";

	let value: string = "";
	const allowedPattern = /^[a-zA-Z0-9 _-]*$/;

	$: invalid = !allowedPattern.test(value);
</script>

<svelte:head
	>``
	<title>TextField - Davidnet Design System</title>
	<meta name="description" content="Lets the user input text." />
</svelte:head>

<Base>
	<Space height="var(--token-space-6)"></Space>
	<div class="header">
		<FlexWrapper direction="column" width="100%">
			<FlexWrapper direction="row" gap="var(--token-space-6)" width="100%">
				<div class="topheader">
					<h1>TextField</h1>
					Lets the user input text.
				</div>
			</FlexWrapper>
		</FlexWrapper>
	</div>
	<FlexWrapper direction="column">
		<main>
			<TextField bind:value label="Test" type="text" placeholder="Test text hier..." {invalid} invalidMessage="Invalid papas." />
			<p>Test: {value}</p>
		</main>
	</FlexWrapper>
</Base>
