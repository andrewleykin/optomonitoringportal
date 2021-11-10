import React from 'react';
import './index.css';

const OnlinePageHeader = () => {
  return (
    <div className="OnlinePageHeader">
      <div className="OnlinePageHeader__block">
        <span>Датчики и блоки опросов</span>
        <div className="OnlinePageHeader__submenu">
          <div className="OnlinePageHeader__submenu-group">
            <span className="OnlinePageHeader__submenu-text">Любое подменю</span>
          </div>
        </div>
      </div>
      <div className="OnlinePageHeader__block">
        <span>Окно</span>
        <div className="OnlinePageHeader__submenu">
          <div className="OnlinePageHeader__submenu-group">
            <div className="OnlinePageHeader__submenu-list">
              <span className="OnlinePageHeader__submenu-text">Упорядочить</span>
              <div className="OnlinePageHeader__submenu-sublist">
                <a className="OnlinePageHeader__submenu-text" href="#">1</a>
                <span className="OnlinePageHeader__submenu-text">2</span>
                <span className="OnlinePageHeader__submenu-text">3</span>
                <span className="OnlinePageHeader__submenu-text">4</span>
              </div>
            </div>
            <div className="OnlinePageHeader__submenu-list">
              <span className="OnlinePageHeader__submenu-text">Рабочая среда</span>
              <div className="OnlinePageHeader__submenu-sublist">
                <a className="OnlinePageHeader__submenu-text" href="#">1</a>
                <span className="OnlinePageHeader__submenu-text">2</span>
                <span className="OnlinePageHeader__submenu-text">3</span>
                <span className="OnlinePageHeader__submenu-text">4</span>
              </div>
            </div>
          </div>
          <div className="OnlinePageHeader__submenu-group">
            <div className="OnlinePageHeader__submenu-list">
              <span className="OnlinePageHeader__submenu-text">Значения</span>
              <div className="OnlinePageHeader__submenu-sublist">
                <a className="OnlinePageHeader__submenu-text" href="#">1</a>
                <span className="OnlinePageHeader__submenu-text">2</span>
                <span className="OnlinePageHeader__submenu-text">3</span>
                <span className="OnlinePageHeader__submenu-text">4</span>
              </div>
            </div>
            <div className="OnlinePageHeader__submenu-list">
              <span className="OnlinePageHeader__submenu-text">История значения</span>
              <div className="OnlinePageHeader__submenu-sublist">
                <a className="OnlinePageHeader__submenu-text" href="#">1</a>
                <span className="OnlinePageHeader__submenu-text">2</span>
                <span className="OnlinePageHeader__submenu-text">3</span>
                <span className="OnlinePageHeader__submenu-text">4</span>
              </div>
            </div>
            <div className="OnlinePageHeader__submenu-list">
              <span className="OnlinePageHeader__submenu-text">Пороговые значения</span>
              <div className="OnlinePageHeader__submenu-sublist">
                <a className="OnlinePageHeader__submenu-text" href="#">1</a>
                <span className="OnlinePageHeader__submenu-text">2</span>
                <span className="OnlinePageHeader__submenu-text">3</span>
                <span className="OnlinePageHeader__submenu-text">4</span>
              </div>
            </div>
            <div className="OnlinePageHeader__submenu-checkbox">
              <span className="OnlinePageHeader__submenu-text">Видеотрансляция со скважины</span>
            </div>
            <div className="OnlinePageHeader__submenu-checkbox active">
              <span className="OnlinePageHeader__submenu-text">Схема скважины и оборудования</span>
            </div>
            <div className="OnlinePageHeader__submenu-checkbox active">
              <span className="OnlinePageHeader__submenu-text">Виброакустичекий фон</span>
            </div>
            <div className="OnlinePageHeader__submenu-checkbox active">
              <span className="OnlinePageHeader__submenu-text">Температурный фон</span>
            </div>
            <div className="OnlinePageHeader__submenu-checkbox active">
              <span className="OnlinePageHeader__submenu-text">Тепловая карта</span>
            </div>
            <div className="OnlinePageHeader__submenu-checkbox active">
              <span className="OnlinePageHeader__submenu-text">Давление в забое</span>
            </div>
          </div>
        </div>
      </div>
      <div className="OnlinePageHeader__block">
        <span>Справка</span>
        <div className="OnlinePageHeader__submenu">
          <div className="OnlinePageHeader__submenu-group">
            <span className="OnlinePageHeader__submenu-text">Любое подменю</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlinePageHeader;
