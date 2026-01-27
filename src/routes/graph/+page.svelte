<script lang="ts">
  import { SvelteFlowProvider } from '@xyflow/svelte';
  import Flow from './Flow.svelte';
  import './graph-theme.css';
</script>

<div style:width="100vw" style:height="100vh">
  <SvelteFlowProvider>
    <Flow/>
  </SvelteFlowProvider>
</div>