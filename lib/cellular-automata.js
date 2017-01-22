import Grid from './grid.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const grid = new Grid(200, 200, ctx);

  grid.draw();
});
