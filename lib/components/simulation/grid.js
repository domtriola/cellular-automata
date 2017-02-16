import Cell from './cell.js';

class Grid {
  constructor(width, height, ctx, n, threshold, colors, dirs) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.colors = colors;
    this.n = n;
    this.threshold = threshold;
    this.dirs = Object.keys(dirs).map(dir => dirs[dir]);

    this.grid = this.gridSetup(width, height);
  }

  gridSetup() {
    let grid = {};

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        grid[`${x}_${y}`] = new Cell(x, y, Math.floor(Math.random() * this.n));
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
