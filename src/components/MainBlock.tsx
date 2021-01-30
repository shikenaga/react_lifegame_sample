import React, { useState, useEffect, useRef } from 'react';
import LifeGame from '../../lib/lifeGame/lifeGame';
import FieldButton from './buttonsField/fieldButton';
import ButtonsField from './buttonsField/buttonsField';
import lifeGameToButtonsField from '../helpers/lifeGameToButtonsField';

export default function MainBlock() {
  const [lifeGameIsProgressing, setLifeGameIsProgressing] = useState(true);
  const [lifeGame, setLifeGame] = useState(
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

  const [lifeGameField, setLifeGameField] = useState(lifeGameToButtonsField(lifeGame));

  useEffect(() => {
    setLifeGameField(() => lifeGameToButtonsField(lifeGame));
  }, [lifeGame]);

  const intervalRef = useRef(null);

  const handleClickStartButton = (() => {
    setLifeGameIsProgressing(false);
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setLifeGame((pre) => new LifeGame(10, 10, pre.nextGen()));
      }, 1000);
    }
  });
  const handleClickStopButton = (() => {
    setLifeGameIsProgressing(true);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  });

  const playbackButton = (
    (running: boolean) => (
      running ? <button type="button" onClick={handleClickStartButton}>start</button>
        : <button type="button" onClick={handleClickStopButton}>stop</button>
    )
  );

  return (
    <div>
      <ButtonsField buttonsField={lifeGameField}>
        <FieldButton
          onClick={(coordinate) => {
            setLifeGame((pre) => new LifeGame(10, 10, pre.reverseCell(coordinate)));
          }}
          setClassName={(cell: boolean) => (cell ? 'living' : '')}
          // eslint-disable-next-line no-unused-vars
          setText={(_: any) => 'o'}
        />
      </ButtonsField>
      {playbackButton(lifeGameIsProgressing)}
      <button
        type="button"
        onClick={() => {
          setLifeGame((pre) => new LifeGame(10, 10, pre.nextGen()));
        }}
      >
        next
      </button>
    </div>
  );
}
