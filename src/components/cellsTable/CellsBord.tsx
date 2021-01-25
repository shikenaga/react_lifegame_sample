import React from 'react';
import TableRenderer from './TableRenderer';
import LifeGame from '../../helpers/lifeGame';

type Props = { lifGame: LifeGame }

const CellsBord: React.FC<Props> = ({ lifGame }) => {
  const cellsBord = Array(lifGame.height).fill(null).map(() => Array(lifGame.width).fill(false));
  lifGame.cells.forEach((cell) => {
    cellsBord[cell.y].splice(cell.x, 1, true);
  });

  return <TableRenderer cellsBord={cellsBord} />;
};

export default CellsBord;
