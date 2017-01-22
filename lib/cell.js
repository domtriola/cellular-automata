class Cell {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state = state;
    this.color = 'rgb(100, 155, 200)';
  }

  draw(ctx, colors) {
    ctx.fillStyle = colors[this.state];
    ctx.fillRect(this.x, this.y, 1, 1);
  }
}

export default Cell;
