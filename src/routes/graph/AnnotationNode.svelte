<script module>
  import type { Node, NodeProps } from '@xyflow/svelte';
  import { MoveDown } from '@lucide/svelte';

  export type AnnotationNode = Node<{
    label: string;
    arrowStyle?: string;
  }>;
</script>

<script lang="ts">

  let { data }: NodeProps<AnnotationNode> = $props();
</script>


{#if data.arrowStyle}
  <div class="annotation-arrow" style={data.arrowStyle}><MoveDown /></div>
{/if}
<div class="annotation-content z-1">
  <div>{data.label}</div>
</div>
