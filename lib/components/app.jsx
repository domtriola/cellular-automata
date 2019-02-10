import React from 'react';
import Footer from './footer/footer.jsx';
import Simulation from './simulation/simulation.jsx';
import Util from './util/util.js';

const urlParams = Util.urlParams();

const defaults = {
  n: 3,
  t: 3,
  colors: [
    Util.randomColor(),
    Util.randomColor(),
    Util.randomColor()
  ],
  dirs: {
    n: [0, -1, true],
    ne: [1, -1, true],
    e: [1, 0, true],
    se: [1, 1, true],
    s: [0, 1, false],
    sw: [-1, 1, true],
    w: [-1, 0, false],
    nw: [-1, -1, true]
  }
};

const params = Object.assign({}, defaults, urlParams);

const App = () => (
  <div className="app-container">
    <Simulation
      n={params.n}
      t={params.t}
      dirs={params.dirs}
    />
    <Footer />
  </div>
);

export default App;
