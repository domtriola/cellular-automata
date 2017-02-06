import React from 'react';
import Grid from './grid';
import Settings from './controls/settings.jsx';

const randColor = () => Math.floor(Math.random() * 256);

class Simulation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n: 3,
      t: 3,
      colors: [
        [randColor(), randColor(), randColor()],
        [randColor(), randColor(), randColor()],
        [randColor(), randColor(), randColor()]
      ]
    };

    this.updateGrid = this.updateGrid.bind(this);
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.grid = new Grid(100, 100,
      this.ctx, this.state.n, this.state.t, this.state.colors);
    this.draw();
  }

  updateGrid(settings, colors) {
    this.setState({ [settings[0]]: settings[1], colors }, () => {
      this.grid = new Grid(100, 100,
        this.ctx, this.state.n, this.state.t, this.state.colors);
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    performance.mark('start-evolve');
    this.grid.evolve();
    performance.mark('end-evolve');

    performance.mark('start-draw');
    this.grid.draw();
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

    requestAnimationFrame(() => this.draw(this.canvas, this.ctx, this.grid));
  }

  render() {
    return (
      <div>
        <Settings
          n={this.state.n}
          t={this.state.t}
          colors={this.state.colors}
          updateGrid={this.updateGrid} />
        <canvas
          ref="canvas"
          width="400"
          height="400"></canvas>
      </div>
    );
  }
}

export default Simulation;
