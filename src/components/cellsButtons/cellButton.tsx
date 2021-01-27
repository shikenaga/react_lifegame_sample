import React from 'react';

type Props = {
  foo: string
}

const CellButton: React.FC<Props> = ({ foo }) => (
  <button type="button">{foo}</button>
);

export default CellButton;
