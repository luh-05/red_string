<script module>
  export type CircleNode = Node<{}>;
</script>

<script lang="ts">
  import { type NodeProps, Handle, type Node, Position } from "@xyflow/svelte";

  let { positionAbsoluteX, positionAbsoluteY }: NodeProps = $props();

  let rot = $state(0);
</script>

<div>
  <div 
    style:width="30px" 
    style:height="30px"
    class="rounded-2xl grid h-screen place-items-center neumorphic-node-raised overflow-hidden bg-background-light">
    <div
      style:width="12px"
      style:height="12px"
      class="z-0 absolute  overflow-hidden">
    </div>
    <div
      style:width="10px"
      style:height="10px"
      class="rounded-xl outline-1 z-0">
      
    </div>
    <div class="rounded-2xl absolute overflow-hidden "
      style:width="30px"
      style:height="30px"
      style:rotate="{90+rot}deg"
      style:transition="rotate 0.15s ease-out">
      <div
        style:width="15px"
        style:height="5px"
        style:top="12.5px"
        class="outline-1 z-1 neumorphic-node-well absolute overflow-visible">
        <div class=""
          style:width="0px"
          style:height="0px">
            <!--Handle type=source position={Position.Left}/-->
        </div>
      </div>
    </div>
    <div
      style:width="10px"
      style:height="10px"
      class="absolute rounded-xl neumorphic-node-well z-2">
      
    </div>
  </div>
  <div
    style:width="0px"
    style:height="0px"
    style:top="-8px"
    style:left="-8px"
    class="-z-1 absolute border-23 border-neumorphic-bg rounded-4xl">
  </div>
  <svg viewBox="-100 -100 200 200" width="300" height="300">
  <circle cx="0" cy="0" r="90" fill="#e9ecef" />
  
  <g id="arm-template" transform="rotate(45)">
    <rect x="-10" y="-80" width="20" height="80" fill="#c00" />
    <circle cx="0" cy="0" r="25" fill="#c00" stroke="#000" stroke-width="2" />
  </g>
</svg>
</div>

<!--Handle type="source" position={Position.Left} />
<Handle type="target" position={Position.Right} /-->
