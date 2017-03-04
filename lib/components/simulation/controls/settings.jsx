import React from 'react';
import Util from '../../util/util';
import Species from './species.jsx';
import Resilience from './resilience.jsx';
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

  render() {
    return (
      <div className="settings">
        <Species n={this.state.n} update={this.update('n')} />
        <Resilience t={this.state.t} update={this.update('t')} />
        <Neighborhoods
          dirs={this.state.dirs}
          toggleDir={this.props.toggleDir} />
      </div>
    );
  }
}

export default Settings;
