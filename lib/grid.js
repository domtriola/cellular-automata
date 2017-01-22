import Cell from './cell.js';

class Grid {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.grid = this.gridSetup(width, height);
  }

  gridSetup() {
    let grid = {};

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        grid[`${x}_${y}`] = new Cell(x, y);
      }
    }

    return grid;
  }

  draw() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.grid[`${x}_${y}`].draw(this.ctx);
      }
    }
  }
}

export default Grid;
