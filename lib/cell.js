class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = 'rgb(100, 155, 200)';
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 1, 1);
  }
}

export default Cell;
