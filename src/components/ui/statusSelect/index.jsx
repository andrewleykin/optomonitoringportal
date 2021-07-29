import React from 'react';
import './index.css'

const AppStatusSelect = ({onClick}) => {
  return (
    <div className="status-select">
      <button className="status-select__item" onClick={() => onClick('all')}>
        <span className="status-select__badge" style={{backgroundColor: '#004065'}}></span>
        Все
      </button>
      <button className="status-select__item" onClick={() => onClick('critical')}>
        <span className="status-select__badge" style={{backgroundColor: '#e02a27'}}></span>
        Только критические
      </button>
      <button className="status-select__item" onClick={() => onClick('important')}>
        <span className="status-select__badge" style={{backgroundColor: '#fddb2a'}}></span>
        Только важные
      </button>
    </div>
  );
}

export default AppStatusSelect;
