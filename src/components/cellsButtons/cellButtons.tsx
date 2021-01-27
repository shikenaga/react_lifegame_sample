import React from 'react';

type Props = {
  buttonsField: any[][],
  children: React.ReactElement
}

const CellButtons: React.FC<Props> = ({ buttonsField, children }) => {
  const cellButtons = buttonsField.map((row, y) => {
    const yIndex = `${y}`;
    const cellsRow = row.map((buttonElement, x) => {
      const xIndex = `${x}`;
      return (
        React.cloneElement(children, {
          key: xIndex,
          coordinate: { x, y },
          buttonElement,
        })
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
