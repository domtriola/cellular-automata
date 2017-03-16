import React from 'react';

const Warning = ({ disable }) => (
  <div className="warning">
    <h3>WARNING</h3>
    <p>
      Some settings produce rapidly flickering
      strobe-like effects.
    </p>
    <p>
      To allow free creative exploration I have not limited the range of
      any of the parameters. As a result there is a plethora of
      interesting patterns to discover, some of which have a strobe-like
      effect. Please use with caution.
    </p>
    <button onClick={() => disable()}>I'm Ready</button>
  </div>
);

export default Warning;
