import Cell from './cell.js';

class Grid {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.colors = ['rgb(48, 62, 116)',
                   'rgb(168, 56, 59)',
                   'rgb(42, 126, 67)'];
    this.n = 3;
    this.threshold = 3;
    this.dirs = [
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1]
    ];

    this.grid = this.gridSetup(width, height);
  }

  gridSetup() {
    let grid = {};

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        grid[`${x}_${y}`] = new Cell(x, y, Math.floor(Math.random() * 3));
      }
    }

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let cell = grid[`${x}_${y}`];
        cell.findNeighbors(grid, this.dirs);
      }
    }

    return grid;
  }

  evolve() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.grid[`${x}_${y}`].checkNeighbors(this.n, this.threshold);
      }
    }

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.grid[`${x}_${y}`].update();
      }
    }
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
