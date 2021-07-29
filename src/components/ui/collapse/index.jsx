import React, { useState } from 'react';
import './index.css';

const AppCollapse = ({isOpen = false, title, count, children, isShowCount, headerExtra}) => {
  const [isOpenItem, setIsOpenItem] = useState(isOpen);
  const toggleIsOpenItem = () => setIsOpenItem(!isOpenItem);

  return (
    <div className={`app-collapse ${isOpenItem ? 'active' : ''}`}>
      <button className="app-collapse__header" onClick={toggleIsOpenItem}>
        <div className="app-collapse__icon">{isOpenItem ? '-' : '+'}</div>
        <span className="app-collapse__name">{title}</span>
        {count !== undefined && isShowCount && (
          <span className="app-collapse__count">({count})</span>
        )}
        {headerExtra}
      </button>
      <div className="app-collapse__body">
        {children}
      </div>
    </div>
  )
}


export default AppCollapse;
