import React from 'react';
import {ReactComponent as LinkIcon} from './link.svg';
import {ReactComponent as UserIcon} from './user.svg';
import './index.css';

const AppHeader = () => {
  return (
    <header className="app-header">
      <nav className="app-header__nav">
        <a href="#" className="active">
          <LinkIcon />
          №2066 / Онлайн
        </a>
        <a href="#">
          <LinkIcon />
          №2067 / Онлайн
        </a>
      </nav>
      <button className="app-header__add">+</button>
      <div className="app-header__user">
        <span className="app-header__user-name">Щербаков Андрей Владимирович</span>
        <span className="app-header__user-icon"><UserIcon /></span>
      </div>
    </header>
  );
}

export default AppHeader;
