import React from 'react';
import Util from '../../util/util';
import ColorPicker from './color_picker.jsx';

class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.state = { colors: this.props.colors };

    this.updateColor = this.updateColor.bind(this);
  }

  updateColor(i) {
    return (e) => {
      e.preventDefault();

      let color = Util.hexToRGB(e.target.value);
      this.state.colors[i] = color;
      this.setState({ colors: this.state.colors });
    };
  }

  randomColors() {
    for (let i = 0; i < 3; i++)
      this.state.colors[i] = Util.randomColor();

    this.setState({ colors: this.state.colors });
  }

  render() {
    return (
      <div className="colors">
        <h4>Colors</h4>
        {this.state.colors.map((color, i) => (
          <ColorPicker
            key={i}
            color={Util.rgbToHex(color)}
            update={this.updateColor(i)} />
        ))}
        <button onClick={() => this.randomColors()}>Randomize</button>
      </div>
    );
  }
}

export default Colors;
