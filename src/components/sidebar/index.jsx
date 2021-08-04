import React from 'react';
import {ReactComponent as LogoIcon} from './logo.svg';
import {ReactComponent as FullLogoIcon} from './fullLogo.svg';
import {ReactComponent as ConfigurationIcon} from './configuration.svg';
import {ReactComponent as InformationIcon} from './information.svg';
import {ReactComponent as OnlineIcon} from './online.svg';
import {ReactComponent as HistoryIcon} from './history.svg';
import {ReactComponent as ReviewsIcon} from './reviews.svg';
import {ReactComponent as EventsIcon} from './events.svg';
import {ReactComponent as SystemIcon} from './system.svg';
import {ReactComponent as SearchIcon} from './search.svg';
import './index.css';

const AppSidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar__logo">
        <div className="logo"><LogoIcon /></div>
        <div className="fullLogo"><FullLogoIcon /></div>
      </div>
      <div className="app-sidebar__menu">
        <div className="app-sidebar__menu-item">
          <ConfigurationIcon />
          <span className="app-sidebar__menu-name">Конфигурация скважины</span>
        </div>
        <div className="app-sidebar__menu-item">
          <InformationIcon />
          <span className="app-sidebar__menu-name">Информация о скважине</span>
          <div className="app-sidebar__menu-childs">
            <div className="app-sidebar__menu-item">
              <InformationIcon />
              <span className="app-sidebar__menu-name">Тех. режимы</span>
            </div>
            <div className="app-sidebar__menu-item">
              <InformationIcon />
              <span className="app-sidebar__menu-name">Инклинометрия</span>
            </div>
            <div className="app-sidebar__menu-item">
              <InformationIcon />
              <span className="app-sidebar__menu-name">Литология</span>
            </div>
            <div className="app-sidebar__menu-item">
              <InformationIcon />
              <span className="app-sidebar__menu-name">Библиотека документов</span>
            </div>
            <div className="app-sidebar__menu-item">
              <InformationIcon />
              <span className="app-sidebar__menu-name">Библиотека документов</span>
            </div>
          </div>
        </div>
        <div className="app-sidebar__menu-item active">
          <OnlineIcon />
          <span className="app-sidebar__menu-name">Онлайн</span>
        </div>
        <div className="app-sidebar__menu-item">
          <HistoryIcon />
          <span className="app-sidebar__menu-name">История</span>
        </div>
        <div className="app-sidebar__menu-item">
          <ReviewsIcon />
          <span className="app-sidebar__menu-name">Отчеты</span>
          <div className="app-sidebar__menu-childs">
            <div className="app-sidebar__menu-input">
              <SearchIcon />
              <input placeholder="Начните вводить название" />
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Выборки данных</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Отчет 1</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Отчет 2</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Отчет 3</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Отчет 4</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Выборки данных</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Отчет 1</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Отчет 2</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Отчет 3</span>
            </div>
            <div className="app-sidebar__menu-item">
              <ReviewsIcon />
              <span className="app-sidebar__menu-name">Отчет 4</span>
            </div>
          </div>
        </div>
        <div className="app-sidebar__menu-item">
          <div className="app-sidebar__menu-icon">
            <EventsIcon />
            <span className="app-sidebar__menu-badge">325</span>
          </div>
          <span className="app-sidebar__menu-name">События</span>
        </div>
        <div className="app-sidebar__menu-item">
          <SystemIcon />
          <span className="app-sidebar__menu-name">Состояние системы</span>
        </div>
      </div>
      <div className="app-sidebar__status">
        <div className="app-sidebar__status-item ok">
          <span className="app-sidebar__status-title">DAS</span>
          <span className="app-sidebar__status-date">дата</span>
          <span className="app-sidebar__status-state">OK</span>
        </div>
        <div className="app-sidebar__status-item warning">
          <span className="app-sidebar__status-title">DTS</span>
          <span className="app-sidebar__status-date">дата</span>
          <span className="app-sidebar__status-state">ERR</span>
        </div>
        <div className="app-sidebar__status-item error">
          <span className="app-sidebar__status-title">PRE<span className="hide">SS</span></span>
          <span className="app-sidebar__status-date">дата</span>
          <span className="app-sidebar__status-state">ERR</span>
        </div>
      </div>
    </div>
  );
}

export default AppSidebar;
