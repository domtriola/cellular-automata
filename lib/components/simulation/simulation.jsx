import React from 'react';
import Util from '../util/util';
import Grid from './grid';
import Settings from './controls/settings.jsx';
import Colors from './controls/colors.jsx';

class Simulation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n: 3,
      t: 3,
      colors: [
        Util.randomColor(),
        Util.randomColor(),
        Util.randomColor()
      ],
      dirs: {
        n:  [0, -1, true],
        ne: [1, -1, true],
        e:  [1, 0, true],
        se: [1, 1, true],
        s:  [0, 1, false],
        sw: [-1, 1, true],
        w:  [-1, 0, false],
        nw: [-1, -1, true]
      }
    };

    this.updateGrid = this.updateGrid.bind(this);
    this.toggleDir = this.toggleDir.bind(this);
    this.resetGrid = this.resetGrid.bind(this);
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.grid = new Grid(
      100, 100, this.ctx, this.state.n,
      this.state.t, this.state.colors,
      this.state.dirs
    );
    this.draw();
  }

  updateGrid(settings, colors) {
    this.setState({
      [settings[0]]: settings[1],
      colors: colors
    }, this.resetGrid());
  }

  toggleDir(dir) {
    this.state.dirs[dir][2] = !this.state.dirs[dir][2];
    this.setState({ dirs: this.state.dirs }, this.resetGrid());
  }

  resetGrid() {
    return () => {
      this.grid = new Grid(
        100, 100, this.ctx, this.state.n,
        this.state.t, this.state.colors,
        this.state.dirs
      );
    };
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.grid.evolve();
    this.grid.draw();

    requestAnimationFrame(() => this.draw());
  }

  render() {
    return (
      <div className="simulation">
        <Settings
          n={this.state.n}
          t={this.state.t}
          colors={this.state.colors}
          dirs={this.state.dirs}
          updateGrid={this.updateGrid}
          toggleDir={this.toggleDir} />
        <div className="canvas">
          <canvas
            ref="canvas"
            width="400"
            height="400"></canvas>
        </div>
        <Colors colors={this.state.colors} />
      </div>
    );
  }
}

export default Simulation;
