import React from 'react';
import Util from '../../util/util';
import ColorPicker from './color_picker.jsx';
import Neighborhoods from './neighborhoods.jsx';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n: this.props.n,
      t: this.props.t,
      colors: this.props.colors,
      dirs: this.props.dirs
    };

    this.update = this.update.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  update(field) {
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

      this.setState({ [field]: val });
      this.props.updateGrid([field, val], colors);
    };
  }

  updateColor(i) {
    return (e) => {
      e.preventDefault();

      let color = Util.hexToRGB(e.target.value);
      this.state.colors[i] = color;
      this.setState({ colors: this.state.colors });
    };
  }

  render() {
    return (
      <div className="settings">
        <p># of States</p>
        <p>{this.state.n}</p>
        <input type="range" min="1" max="8" value={this.state.n}
          onChange={this.update('n')}></input>
        <p>Threshold</p>
        <p>{this.state.t}</p>
        <input type="range" min="1" max="4" value={this.state.t}
          onChange={this.update('t')}></input>
        {this.state.colors.map((color, i) => (
          <ColorPicker
            key={i}
            color={Util.rgbToHex(color)}
            update={this.updateColor(i)} />
        ))}
        <Neighborhoods
          dirs={this.state.dirs}
          toggleDir={this.props.toggleDir} />
      </div>
    );
  }
}

export default Settings;
