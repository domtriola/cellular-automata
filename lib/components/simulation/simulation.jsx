import React from 'react';
import Util from '../util/util';
import Grid from './grid';
import Settings from './controls/settings.jsx';
import Colors from './controls/colors.jsx';
import Warning from './warning.jsx';

class Simulation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n: this.props.n,
      t: this.props.t,
      colors: [
        Util.randomColor(),
        Util.randomColor(),
        Util.randomColor()
      ],
      dirs: this.props.dirs,
      warning: true
    };

    this.updateGrid = this.updateGrid.bind(this);
    this.updateSetting = this.updateSetting.bind(this);
    this.toggleDir = this.toggleDir.bind(this);
    this.resetGrid = this.resetGrid.bind(this);
    this.disableWarning = this.disableWarning.bind(this);
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

  updateSetting(field) {
    return (e) => {
      e.preventDefault();

      let val = e.target.value;
      let colors = this.state.colors;

      if (field === 'n') {
        while (colors.length < val) {
          let newColor = Util.randomColor();
          colors.push(newColor);
          this.setState({ colors });
        }
        while (colors.length > val) {
          colors.pop();
          this.setState({ colors });
        }
      }

      this.setState({ [field]: val }, this.updateUrl);
      this.updateGrid([field, val], colors);
    };
  }

  updateUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set('n', this.state.n);
    url.searchParams.set('t', this.state.t);
    url.searchParams.set('dirs', encodeURI(JSON.stringify(this.state.dirs)));
    const urlState = {
      title: 'Cellular Automata',
      url: url.href,
    };
    history.pushState(urlState, urlState.title, urlState.url);
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

  disableWarning() {
    this.setState({ warning: false });
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
          updateSetting={this.updateSetting}
          toggleDir={this.toggleDir} />
        <div className="canvas">
          <canvas
            ref="canvas"
            width="400"
            height="400"></canvas>
        </div>
        <Colors colors={this.state.colors} />
        {this.state.warning ? <Warning disable={this.disableWarning}/> : null}
      </div>
    );
  }
}

export default Simulation;
