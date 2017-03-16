import React from 'react';
import classNames from 'classnames';

const info = "A cellular automaton simulation consists of a grid of cells with a finite number of states. Each cell’s state can change based on a simple set of rules. In this simulation every species (a cell with a distinct state — in this case color) can eat exactly one other species, and every species can be eaten by exactly one other species. When a cell is eaten is becomes the species (color) of the cell that ate it. In terms of cellular automata jargon: species represented the number of states, resilience represents the threshold for change, and vulnerability represents a neighborhood. Adjust the settings to find cool patterns!";

const modalExit = (toggleModal) => (
  <div
    className="modal-exit"
    onClick={() => toggleModal()}>
  </div>
);

class Footer extends React.Component {
  constructor() {
    super();

    this.state = { moreInfo: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ moreInfo: !this.state.moreInfo });
  }

  render() {
    let infoClasses = classNames({
      'info-modal': true,
      'active': this.state.moreInfo
    });

    return (
      <div className="footer">
        <h1>Cellular Automata</h1>
        <h4 onClick={() => this.toggleModal()}>What is all this?</h4>
        <div className={infoClasses}>
          {this.state.moreInfo ? info : null}
        </div>
        {this.state.moreInfo ? modalExit(this.toggleModal) : null}
      </div>
    );
  }
}

export default Footer;
