import React from 'react';
import './index.css';

const AppCheckbox = ({value, onChange, label}) => {
  return (
    <label className="app-checkbox">
      <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} />
      <span className="app-checkbox__box"></span>
      {label}
    </label>
  );
}

export default AppCheckbox;
