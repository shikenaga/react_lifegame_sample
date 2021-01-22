import React from 'react';
import TableRenderer from './TableRenderer';

type Props = {
  width: number,
  height: number,
  cells: { x: number, y: number }[]
}

const CellsBord: React.FC<Props> = ({ width, height, cells }) => {
  const cellsBord = Array(height).fill(null).map(() => Array(width).fill(false));
  cells.forEach((cell) => {
    cellsBord[cell.y].splice(cell.x, 1, true);
  });

  return <TableRenderer cellsBord={cellsBord} />;
};

export default CellsBord;
