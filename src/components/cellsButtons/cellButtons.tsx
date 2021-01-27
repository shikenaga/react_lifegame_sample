import React from 'react';
import LifeGame from '../../../lib/lifeGame/lifeGame';

type Props = {
  lifeGame: LifeGame,
  children: React.ReactElement
}

const CellButtons: React.FC<Props> = ({ lifeGame, children }) => {
  const lifeGameField: boolean[][] = Array(lifeGame.height)
    .fill(null)
    .map(() => Array(lifeGame.width).fill(false));
  lifeGame.cells.forEach((cell) => {
    lifeGameField[cell.y].splice(cell.x, 1, true);
  });

  const cellButtons = lifeGameField.map((row, y) => {
    const yIndex = `${y}`;
    const cellsRow = row.map((cell, x) => {
      const xIndex = `${x}`;
      return (
        cell ? React.cloneElement(children, { key: xIndex, coordinate: { x, y }, className: 'living' })
          : React.cloneElement(children, { key: xIndex, coordinate: { x, y } })
      );
    });
    return <div key={yIndex}>{cellsRow}</div>;
  });

  return (
    <div>
      {cellButtons}
    </div>
  );
};

export default CellButtons;
