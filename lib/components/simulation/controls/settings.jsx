import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n: this.props.n,
      t: this.props.t,
      colors: this.props.colors
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
          let newColor = [Math.floor(Math.random() * 256),
                          Math.floor(Math.random() * 256),
                          Math.floor(Math.random() * 256)];
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
        <p>{this.state.n}</p>
        <input type="range" min="1" max="8" value={this.state.n}
          onChange={this.update('n')}></input>
        <p>{this.state.t}</p>
        <input type="range" min="1" max="4" value={this.state.t}
          onChange={this.update('t')}></input>
      </div>
    );
  }
}

export default Settings;
