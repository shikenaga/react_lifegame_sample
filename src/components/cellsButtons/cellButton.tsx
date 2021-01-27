import React from 'react';

type Props = {
  coordinate: { x: number, y: number },
  className: string,
  onClick: Function
}

const CellButton: React.FC<Props> = ({ coordinate, className, onClick }) => (
  <button type="button" className={className} onClick={() => onClick(coordinate)}>0</button>
);

export default CellButton;
