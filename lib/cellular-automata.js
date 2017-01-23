import Grid from './grid.js';

const draw = (canvas, ctx, grid) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  grid.evolve();
  grid.draw();

  requestAnimationFrame(() => draw(canvas, ctx, grid));
};

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const grid = new Grid(100, 100, ctx);

  draw(canvas, ctx, grid);
});
