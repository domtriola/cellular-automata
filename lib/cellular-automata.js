import Grid from './grid.js';

const draw = (canvas, ctx, grid) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  performance.mark('start-evolve');
  grid.evolve();
  performance.mark('end-evolve');

  performance.mark('start-draw');
  grid.draw();
  performance.mark('end-draw');

  performance.measure("durationEvolve", "start-evolve", "end-evolve");
  performance.measure("durationDraw", "start-draw", "end-draw");

  let evolveMeasures = performance.getEntriesByName('durationEvolve');
  let drawMeasures = performance.getEntriesByName('durationDraw');

  if (evolveMeasures.length === 100) {
    console.log('Avg Evolve: ', evolveMeasures.reduce((total, measure) => {
      return total + measure.duration;
    }, 0) / evolveMeasures.length);

    console.log('Avg Draw: ', drawMeasures.reduce((total, measure) => {
      return total + measure.duration;
    }, 0) / drawMeasures.length);
  }

  // requestAnimationFrame(() => draw(canvas, ctx, grid));
};

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const grid = new Grid(100, 100, ctx);

  // TODO
  window.grid = grid;

  draw(canvas, ctx, grid);
});
