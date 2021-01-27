import React, { useState, useRef } from 'react';
import LifeGame from '../helpers/lifeGame';
import CellButton from './cellsButtons/cellButton';
import CellButtons from './cellsButtons/cellButtons';

export default function MainBlock() {
  const [lifeGameIsProgressing, setLifeGameIsProgressing] = useState(true);
  const [lifeGame] = useState(
    new LifeGame(
      10,
      10,
      [
        { x: 1, y: 4 },
        { x: 1, y: 5 },
        { x: 2, y: 3 },
        { x: 2, y: 6 },
        { x: 3, y: 2 },
        { x: 3, y: 7 },
        { x: 4, y: 1 },
        { x: 4, y: 8 },
        { x: 5, y: 1 },
        { x: 5, y: 8 },
        { x: 6, y: 2 },
        { x: 6, y: 7 },
        { x: 7, y: 3 },
        { x: 7, y: 6 },
        { x: 8, y: 4 },
        { x: 8, y: 5 },
      ],
    ),
  );

  const intervalRef = useRef(null);

  const handleClickStopButton = (() => {
    setLifeGameIsProgressing(false);
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        window.console.log('hi, in start!');
      }, 100);
    }
  });
  const handleClickStartButton = (() => {
    setLifeGameIsProgressing(true);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  });

  const playbackButton = (
    (running: boolean) => (
      running ? <button type="button" onClick={handleClickStopButton}>stop</button>
        : <button type="button" onClick={handleClickStartButton}>start</button>
    )
  );

  return (
    <div>
      <CellButtons lifeGame={lifeGame}>
        <CellButton onClick={(coordinate) => window.console.log(coordinate)} />
      </CellButtons>
      {playbackButton(lifeGameIsProgressing)}
    </div>
  );
}
