class Cell {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state = state;
    this.nextState = null;
    this.color = 'rgb(100, 155, 200)';
    this.neighbors = [];
  }

  findNeighbors(grid, dirs) {
    dirs.forEach(dir => {
      let space = `${this.x + dir[0]}_${this.y + dir[1]}`;
      if (grid[space])
        this.neighbors.push(grid[space]);
    });
  }

  checkNeighbors(n, threshold) {
    let higherState = (this.state + 1) % n;
    let count = 0;

    this.neighbors.forEach(neighbor => {
      if (neighbor.state === higherState)
        count++;
    });

    if (count >= threshold) {
      this.nextState = higherState;
    }
  }

  update() {
    if (this.nextState !== null) {
      this.state = this.nextState;
      this.nextState = null;
    }
  }

  draw(ctx, colors) {
    ctx.fillStyle = colors[this.state];
    ctx.fillRect(this.x * 4, this.y * 4, 4, 4);
  }
}

export default Cell;