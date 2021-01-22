import React from 'react';
import CellsTable from './cellsTable/CellsTable';

const width = 10;
const height = 10;
const cells = [
  { x: 1, y: 4 },
  { x: 1, y: 5 },
  { x: 2, y: 3 },
  { x: 2, y: 6 },
  { x: 3, y: 2 },
  { x: 3, y: 7 },
  { x: 4, y: 1 },
  { x: 4, y: 8 },
  { x: 5, y: 1 },
  { x: 5, y: 8 },
  { x: 6, y: 2 },
  { x: 6, y: 7 },
  { x: 7, y: 3 },
  { x: 7, y: 6 },
  { x: 8, y: 4 },
  { x: 8, y: 5 },
];

export default function MainBlock() {
  return <CellsTable width={width} height={height} cells={cells} />;
}
