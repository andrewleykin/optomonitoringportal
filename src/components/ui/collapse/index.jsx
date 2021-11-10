import React, { useState } from 'react';
import './index.css';

const AppCollapse = ({isOpen = false, title, count, children, isShowCount, headerExtra, icon, openIcon, headerClass}) => {
  const [isOpenItem, setIsOpenItem] = useState(isOpen);
  const toggleIsOpenItem = () => setIsOpenItem(!isOpenItem);

  const AppCollapseIcon = () => {
    if (!icon && !openIcon) {
      return isOpenItem ? '-' : '+'
    }
    
    return <img src={isOpenItem ? openIcon : icon} alt={isOpenItem ? 'opened icon' : 'closed icon'} />
  }
  

  return (
    <div className={`app-collapse ${isOpenItem ? 'active' : ''}`}>
      <button className={`app-collapse__header ${headerClass}`} onClick={toggleIsOpenItem}>
        <AppCollapseIcon />
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
