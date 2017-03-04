import React from 'react';

const Species = ({ n, update }) => (
  <div className="species">
    <h4>Species</h4>
    <p>{n}</p>
    <input type="range" min="1" max="8" value={n}
      onChange={e => update(e)}></input>
  </div>
);

export default Species;
