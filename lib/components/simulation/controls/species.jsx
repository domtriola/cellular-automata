import React from 'react';
import Info from './info-modal.jsx';

const modalBody = "Change the amount of different types of cells.";

const Species = ({ n, update }) => (
  <div className="species">
    <h4>Species <Info body={modalBody} /></h4>
    <p>{n}</p>
    <input type="range" min="1" max="8" value={n}
      onChange={e => update(e)}></input>
  </div>
);

export default Species;
