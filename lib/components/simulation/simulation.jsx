import React from 'react';

class Simulation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <canvas id="canvas" width="400" height="400"></canvas>
    );
  }
}

export default Simulation;
