import React from 'react';
import classNames from 'classnames';

const rows = [
  ['nw', 'n', 'ne'],
  ['w', null, 'e'],
  ['sw', 's', 'se']
];

const Neighborhoods = ({ dirs, toggleDir }) => (
  <div className="neighborhoods">
    <p>Neighborhoods</p>
    {rows.map((row, i) => (
      <div key={i} className="row">
        {row.map((dir, j) => {
          let cellClass = classNames({
            'cell': true,
            'active': dir !== null && dirs[dir][2]
          });

          return (
            <div
              key={j}
              className={cellClass}
              onClick={() => toggleDir(dir)}></div>
          );
        })}
      </div>
    ))}
  </div>
);

export default Neighborhoods;
