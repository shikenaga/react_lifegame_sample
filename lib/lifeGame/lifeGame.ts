type Cell = { x: number, y: number };

export default class LifeGame {
  private _cells: Cell[] = [];

  readonly height;

  readonly width;

  constructor(height: number, width: number, cells: Cell[]) {
    this.height = height;
    this.width = width;
    this.addCells(cells);
  }

  get cells(): Cell[] {
    return this._cells;
  }

  // wip
  reverseCell(cell: Cell): Cell[] {
    if (this.isEmpty(cell)) {
      this._cells = this._cells.concat(cell);
    } else {
      this._cells = this._cells.filter((pre) => !(pre.x === cell.x && pre.y === cell.y));
    }
    return this._cells;
  }

  addCells(cells: Cell[]): Cell[] {
    cells.forEach((cell) => {
      this.reverseCell(cell);
    });
    return this._cells;
  }

  nextGen(): Cell[] {
    const survivors = this._cells.filter((cell) => {
      const liveneighbs = this.liveneighbs(cell);
      return liveneighbs === 2 || liveneighbs === 3;
    });

    const births = this._cells.flatMap((cell) => this.neighbs(cell).filter((arroundCell) => {
      const isEmpty = this.isEmpty(arroundCell);
      const liveneighbs = this.liveneighbs(arroundCell);
      return isEmpty && (liveneighbs === 3);
    }).filter((elm, index, self) => self.indexOf(elm) === index));
    return survivors.concat(births);
  }

  private isAlive(cell: Cell): boolean {
    return this._cells.some((innerCell) => innerCell.x === cell.x && innerCell.y === cell.y);
  }

  private isEmpty(cell: Cell): boolean {
    return !this.isAlive(cell);
  }

  private neighbs(cell: Cell): Cell[] {
    return Array.of(
      { x: cell.x - 1, y: cell.y - 1 }, { x: cell.x, y: cell.y + 1 },
      { x: cell.x + 1, y: cell.y - 1 }, { x: cell.x - 1, y: cell.y },
      { x: cell.x + 1, y: cell.y }, { x: cell.x - 1, y: cell.y + 1 },
      { x: cell.x, y: cell.y - 1 }, { x: cell.x + 1, y: cell.y + 1 },
    ).filter((neighbCell) => (
      neighbCell.x >= 0 && neighbCell.x < this.width
      && neighbCell.y >= 0 && neighbCell.y < this.height
    ));
  }

  private liveneighbs(cell: Cell): number {
    return this.neighbs(cell).filter((neighbCell) => this.isAlive(neighbCell)).length;
  }
}
