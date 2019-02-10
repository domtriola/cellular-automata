import React from 'react';
import Species from './species.jsx';
import Resilience from './resilience.jsx';
import Neighborhoods from './neighborhoods.jsx';

const Settings = ({ n, t, dirs, updateSetting, toggleDir }) => (
  <div className="settings">
    <Species n={n} update={updateSetting('n')} />
    <Resilience t={t} update={updateSetting('t')} />
    <Neighborhoods
      dirs={dirs}
      toggleDir={toggleDir} />
  </div>
);

export default Settings;
