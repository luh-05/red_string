<script module>
  export type CircleNode = Node<{}>;
</script>

<script lang="ts">
  import { type NodeProps, Handle, type Node, Position } from "@xyflow/svelte";

  let { positionAbsoluteX, positionAbsoluteY }: NodeProps = $props();

  let rot = $state(0);
  let arms = $state([
    { id: 1, angle: 0 } // Neumorphic colors are usually close to the BG
  ]);
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
      class="rounded-xl  z-0">
      
    </div>
    <!--div class="rounded-2xl absolute overflow-hidden "
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
        </div>
      </div>
    </div-->
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

  <!--svg viewBox="-100 -100 200 200" width="20" height="20">
    <defs>
      <filter id="neumorphic_inset_red" filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="300%" height="300%">
        <feOffset dx="6" dy="6" in="SourceAlpha" result="offset" />
        <feGaussianBlur stdDeviation="3" in="offset" result="blur" />
        <feComposite operator="out" in="SourceAlpha" in2="blur" result="inverse" />
        <feFlood flood-color="#923737" flood-opacity=".6" result="color" />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />

        <feOffset dx="-6" dy="-6" in="SourceAlpha" result="offsetLight" />
        <feGaussianBlur stdDeviation="3" in="offsetLight" result="blurLight" />
        <feComposite operator="out" in="SourceAlpha" in2="blurLight" result="inverseLight" />
        <feFlood flood-color="#ff0000" flood-opacity=".6" result="colorLight" />
        <feComposite operator="in" in="colorLight" in2="inverseLight" result="highlight" />

        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="shadow" />
          <feMergeNode in="highlight" />
        </feMerge>
      </filter>
    </defs>

    <circle cx="0" cy="0" r="95" fill="#f0f0f0" />

    {#each arms as arm (arm.id)}
      <g transform="rotate({arm.angle})" filter="" >
        <path 
          d="M -8 -80 
            A 8 8 0 0 1 8 -80 
            L 8 -15 
            A 22 22 0 1 1 -8 -15 
            Z" 
          fill="var(--color-deep-red)" 
        />
      </g>
    {/each}
  </svg-->
</div>

<!--Handle type="source" position={Position.Left} />
<Handle type="target" position={Position.Right} /-->
