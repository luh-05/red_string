import { MarkerType, type Node, type Edge } from '@xyflow/svelte';

import { type BuiltInNode } from '@xyflow/svelte';
import { type AnnotationNode } from './AnnotationNode.svelte';
import { type CircleNode } from './CircleNode.svelte';

export type AppNode = BuiltInNode | AnnotationNode | CircleNode;

export const initialNodes: Node[] = [
  /*{
    id: '1-1',
    type: 'input',
    data: {
      label: 'node label',
    },
    position: { x: 150, y: 0 },
  },
  {
    id: '1-2',
    type: 'default',
    data: {
      label: 'node label',
    },
    position: { x: 350, y: 200 },
  },*/
  {
    id: '1-1',
    type: 'source',
    draggable: false,
    data: {

    },
    position: { x: 150, y: 300}
  },
  {
    id: '1-2',
    type: 'source',
    draggable: false,
    data: {

    },
    position: { x: 250, y: 350}
  },
  {
    id: '1-3',
    type: 'source',
    draggable: false,
    data: {

    },
    position: { x: 300, y: 200}
  },
  {
    id: '1-4',
    type: 'source',
    draggable: false,
    data: {

    },
    position: { x: 400, y: 250}
  },
  {
    id: '1-5',
    type: 'source',
    draggable: false,
    data: {

    },
    position: { x: 500, y: 250}
  },
];

export const initialEdges: Edge[] = [
  /*{
    id: 'e1-2',
    source: '1-1',
    target: '1-2',
    label: 'edge label',
    type: 'smoothstep',
  },
  {
    id: 'e2-2',
    source: '1-2',
    target: '2-2',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },*/
];
