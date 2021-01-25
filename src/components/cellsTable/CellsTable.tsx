import React from 'react';
import CellsBord from './CellsBord';

type Props = React.ComponentProps<typeof CellsBord>
const LifeGame: React.FC<Props> = ({ lifGame }) => <CellsBord lifGame={lifGame} />;

export default LifeGame;
