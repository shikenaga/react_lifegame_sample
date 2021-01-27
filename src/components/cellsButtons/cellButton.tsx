import React from 'react';

type Props = {
  coordinate: { x: number, y: number },
  foo: string
  onClick: Function
}

const CellButton: React.FC<Props> = ({ coordinate, foo, onClick }) => (
  <button type="button" onClick={() => onClick(coordinate)}>{foo}</button>
);

export default CellButton;
