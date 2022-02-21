import React from 'react';
import './index.css';

const AppSelect = ({list, ...props}) => {
  return (
    <select className="app-select" {...props}>
      {list.map(item => (
        <option value={item.value} key={item.value}>{item.title}</option>
      ))}
    </select>
  );
}

export default AppSelect;
