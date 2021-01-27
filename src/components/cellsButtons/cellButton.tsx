import React from 'react';

type Props = {
  coordinate: { x: number, y: number },
  className: string,
  onClick: Function,
  cell: any
}

const CellButton: React.FC<Props> = ({
  coordinate,
  setText,
  setClassName,
  onClick,
  buttonElement,
}) => (
  <button
    type="button"
    className={setClassName(buttonElement)}
    onClick={() => onClick(coordinate)}
  >
    {setText(buttonElement)}
  </button>
);

export default CellButton;
