import React from 'react';
import classNames from 'classnames';
import Info from './info-modal.jsx';

const rows = [
  ['nw', 'n', 'ne'],
  ['w', null, 'e'],
  ['sw', 's', 'se']
];

const modalBody = "Changes the directions that prey cells may be eaten from.";

const Neighborhoods = ({ dirs, toggleDir }) => (
  <div className="neighborhoods">
    <h4>Vulnerability <Info body={modalBody} /></h4>
    {rows.map((row, i) => (
      <div key={i} className="row">
        {row.map((dir, j) => {
          let cellClass = classNames({
            'cell': dir !== null,
            'active': dir !== null && dirs[dir][2],
            'dead-cell': dir === null
          });

          return (
            <div
              key={j}
              className={cellClass}
              onClick={dir === null ? null : () => toggleDir(dir)}></div>
          );
        })}
      </div>
    ))}
  </div>
);

export default Neighborhoods;
