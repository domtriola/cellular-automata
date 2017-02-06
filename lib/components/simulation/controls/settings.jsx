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
        if (this.colors.length < val) {
          colors.push(Math.floor(Math.random() * 256));
          this.setState({ colors });
        } else {
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
      <div>
        <p>{this.state.n}</p>
        <input type="range" min="1" max="10" value={this.state.n}
          onChange={this.update('n')}></input>
        <p>{this.state.t}</p>
        <input type="range" min="1" max="10" value={this.state.t}
          onChange={this.update('t')}></input>
      </div>
    );
  }
}

export default Settings;
