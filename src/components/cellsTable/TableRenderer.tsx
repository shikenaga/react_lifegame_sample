import React from 'react';

type Props = {
  cellsBord: boolean[][]
}

const TableRenderer: React.FC<Props> = ({ cellsBord }) => {
  const tbody = cellsBord.map((row, y) => {
    const yIndex = `${y}`;
    const cellsRow = row.map((cell, x) => {
      const xIndex = `${x}`;
      return (cell ? <td key={xIndex} className="living" /> : <td key={xIndex} />);
    });
    return <tr key={yIndex}>{cellsRow}</tr>;
  });

  return (
    <table>
      <tbody>
        {tbody}
      </tbody>
    </table>
  );
};

export default TableRenderer;
