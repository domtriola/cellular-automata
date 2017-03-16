import React from 'react';
import Info from './info-modal.jsx';

const modalBody = "The amount of neighboring predator cells it takes to eat a prey cell";

const Resilience = ({ t, update }) => (
  <div className="resilience">
    <h4>Resilience</h4>
    <h4><Info body={modalBody} /></h4>
    <p>{t}</p>
    <input type="range" min="1" max="4" value={t}
      onChange={e => update(e)}></input>
  </div>
);

export default Resilience;
