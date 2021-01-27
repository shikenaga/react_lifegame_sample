import LifeGame from '../../lib/lifeGame/lifeGame';

export default function lifeGameToButtonsField(lifeGame: LifeGame): any[][] {
  const arr = Array(lifeGame.height)
    .fill(null)
    .map(() => Array(lifeGame.width).fill(false));
  lifeGame.cells.forEach((cell) => {
    arr[cell.y].splice(cell.x, 1, true);
  });
  return arr;
}
