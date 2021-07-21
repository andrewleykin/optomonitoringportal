import React from 'react';
import './index.css';

const AppBlock = ({title, actions, children}) => {
  return (
    <div className="block">
      <div className="block__header">
        <h2 className="block__title">{title}</h2>
        <div className="block__actions">
          {actions}
        </div>
      </div> 

      <div className="block__body">
        {children}
      </div>
    </div>
  );
}

export default AppBlock;
