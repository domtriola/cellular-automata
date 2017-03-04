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
      </div>
    );
  }
}

export default Colors;
