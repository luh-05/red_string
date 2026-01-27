<script lang="ts">
  import {
    SvelteFlow,
    Background,
    Controls,
    MiniMap,
    type NodeTypes,
    type EdgeTypes,
    type Edge,
    type Node,
    useConnection,
    useViewport,
    Panel,
  } from '@xyflow/svelte';

  import '@xyflow/svelte/dist/style.css';

  import { initialNodes, initialEdges } from './nodes-and-edges';

  import AnnotationNode from './AnnotationNode.svelte';
  import ButtonEdge from './ButtonEdge.svelte';
  import CircleNode from './CircleNode.svelte';
  //import ResizerNode from './ResizerNode.svelte';
  import ToolbarNode from './ToolbarNode.svelte';
  import TextNode from './TextNode.svelte';
  import { untrack } from 'svelte';
  import NodeWrapper from './NodeWrapper.svelte';
  import SourceNode from './SourceNode.svelte';

  const connectionAnnotation = {
    id: 'connection-annotation',
    type: 'annotation',
    draggable: false,
    selectable: false,
    data: {
      label: 'This is your red thread',
    },
    position: { x: 0, y: 0 },
  };

  const nodeTypes: NodeTypes = {
    annotation: AnnotationNode,
    tools: ToolbarNode,
    circle: CircleNode,
    //resizer: ResizerNode,
    textinput: TextNode,
    source: SourceNode,
  };

  const edgeTypes: EdgeTypes = {
    button: ButtonEdge,
  };

  let nodes = $state.raw<Node[]>(initialNodes);
  let edges = $state.raw<Edge[]>(initialEdges);

  const connection = useConnection();

  const viewport = useViewport();

  $effect(() => {
    if (connection.current.inProgress) {
      let untrackedNodes = untrack(() => nodes);
      const nodeFound =
        untrackedNodes.findIndex((node) => node.id === 'connection-annotation') !== -1;
      const { from, to } = connection.current;
      const nodePosition = {
        x: to.x - 150,
        y: to.y - 25,
      };
      nodes = nodeFound
        ? untrackedNodes.map((node) => {
            if (node.id === 'connection-annotation') {
              return {
                ...connectionAnnotation,
                position: nodePosition,
                hidden: Math.abs(to.y - from.y) < 25 && Math.abs(to.x - from.x) < 25,
              };
            }
            return node;
          })
        : [
            ...nodes,
            {
              ...connectionAnnotation,
              position: nodePosition,
            },
          ];
    } else {
      // delete the connection-annotaion node
      nodes = untrack(() => nodes).filter((node) => node.id !== 'connection-annotation');
    }
  });
</script>

<SvelteFlow
  class="overview"
  bind:nodes
  bind:edges
  {nodeTypes}
  {edgeTypes}
  fitView
  fitViewOptions={{ padding: { x: '30px', y: '30px', bottom: '35%' }, minZoom: 0.25, maxZoom: 2 }}
>
  <Background patternColor="#aaa" gap={16} />
  <Panel position="bottom-left">
    <div style:font-family="monospace">
      <div>x: {viewport.current.x.toFixed(2)}</div>
      <div>y: {viewport.current.y.toFixed(2)}</div>
      <div>zoom: {viewport.current.zoom.toFixed(2)}</div>
    </div>
  </Panel>
  <NodeWrapper bottom={15} left={120} width={420}>
    <AnnotationNode
      id="info"
      type="annotation"
      draggable={false}
      dragging={false}
      selectable={false}
      deletable={false}
      selected={false}
      isConnectable={false}
      positionAbsoluteX={0}
      positionAbsoluteY={0}
      zIndex={5000}
      data={{
        label:
          'Drag the canvas to see all avaialble sources and connect them together to create your red thread',
      }}
    />
  </NodeWrapper>
</SvelteFlow>
