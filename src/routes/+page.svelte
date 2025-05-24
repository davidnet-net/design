<script lang="ts">
	import { Button } from '@davidnet/svelte-ui';
</script>

<h1 style="font-family: Open Sans">Component Showcase</h1>
<h2 style="font-family: Open Sans">Button appearance</h2>
<p style="font-family: Open Sans; font-weight: bold;">import &#123; Button &#125; from '@davidnet/svelte-ui';</p>
<span style="padding: 10px;"></span>
<p style="font-family: Open Sans; font-weight: bold;">&lt;Button appearance="subtle"&gt;Subtle Button &lt;Button&gt;</p>
<Button appearance="subtle">Subtle Button</Button>
<span style="padding: 10px;"></span>
<p style="font-family: Open Sans; font-weight: bold;">&lt;Button appearance="default"&gt;Subtle Button &lt;Button&gt;</p>
<Button appearance="default">Default Button</Button>
<span style="padding: 10px;"></span>
<p style="font-family: Open Sans; font-weight: bold;">&lt;Button appearance="primary"&gt;Subtle Button &lt;Button&gt;</p>
<Button appearance="primary">Primary Button</Button>
<span style="padding: 10px;"></span>
<p style="font-family: Open Sans; font-weight: bold;">&lt;Button appearance="warning"&gt;Subtle Button &lt;Button&gt;</p>
<Button appearance="warning">Warning Button</Button>
<span style="padding: 10px;"></span>
<p style="font-family: Open Sans; font-weight: bold;">&lt;Button appearance="danger"&gt;Subtle Button &lt;Button&gt;</p>
<Button appearance="danger">Danger Button</Button>

<span style="padding: 20px;"></span>
<p style="font-family: Open Sans; font-weight: bold;">&lt;Button appearance="default" iconBefore="delete" &gt;Subtle Button &lt;Button&gt;</p>
<Button appearance="default" iconBefore="delete">IconBefore Button</Button>
<span style="padding: 10px;"></span>
<p style="font-family: Open Sans; font-weight: bold;">&lt;Button appearance="default" iconAfter="delete" &gt;Subtle Button &lt;Button&gt;</p>
<Button appearance="default" iconAfter="delete">IconAfter Button</Button>