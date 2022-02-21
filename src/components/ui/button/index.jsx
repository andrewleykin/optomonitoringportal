import React from 'react';
import './index.css';

const AppButton = ({isWide = false, type = 'primary', children, ...props}) => {
  const getClass = () => {
    let className = 'app-button'

    if (isWide) className += ' wide'

    className += ` ${type}`

    return className
  }

  return (
    <button className={getClass()} {...props}>{children}</button>
  );
}

export default AppButton;
