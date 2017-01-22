import Cell from './cell.js';

class Grid {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.colors = ['red', 'green', 'blue'];
    this.grid = this.gridSetup(width, height);
  }

  gridSetup() {
    let grid = {};

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        grid[`${x}_${y}`] = new Cell(x, y, Math.floor(Math.random() * 3));
      }
    }

    return grid;
  }

  draw() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.grid[`${x}_${y}`].draw(this.ctx, this.colors);
      }
    }
  }
}

export default Grid;
