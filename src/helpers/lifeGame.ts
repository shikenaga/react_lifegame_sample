type Cell = { x: number, y: number };

export default class LifeGame {
  private _cells: Cell[] = [];

  readonly height;

  readonly width;

  constructor(height: number, width: number, ...cells: Cell[]) {
    this.height = height;
    this.width = width;
    this.addCells(cells);
  }

  get cells(): Cell[] {
    return this._cells;
  }

  // wip
  addCell(cell: Cell): Cell[] {
    this._cells.push(cell);
    return this._cells;
  }

  addCells(cells: Cell[]): Cell[] {
    cells.forEach((cell) => {
      this.addCell(cell);
    });
    return this._cells;
  }

  // wip
  nextGen(): Cell[] {
    return this._cells;
  }
}
