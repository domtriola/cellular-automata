import React from 'react';

const ColorPicker = ({ color, update }) => (
  <div>
    <input
      type="color"
      value={color}
      onChange={e => update(e)}></input>
  </div>
);

export default ColorPicker;
