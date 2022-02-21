import React from 'react';
import './index.css';

const SubHeader = () => {
  return (
    <div className="SubHeader">
      <div className="SubHeader__block">
        <span>Датчики и блоки опросов</span>
        <div className="SubHeader__submenu">
          <div className="SubHeader__submenu-group">
            <span className="SubHeader__submenu-text">Любое подменю</span>
          </div>
        </div>
      </div>
      <div className="SubHeader__block">
        <span>Окно</span>
        <div className="SubHeader__submenu">
          <div className="SubHeader__submenu-group">
            <div className="SubHeader__submenu-list">
              <span className="SubHeader__submenu-text">Упорядочить</span>
              <div className="SubHeader__submenu-sublist">
                <a className="SubHeader__submenu-text" href="javascript.void()">1</a>
                <span className="SubHeader__submenu-text">2</span>
                <span className="SubHeader__submenu-text">3</span>
                <span className="SubHeader__submenu-text">4</span>
              </div>
            </div>
            <div className="SubHeader__submenu-list">
              <span className="SubHeader__submenu-text">Рабочая среда</span>
              <div className="SubHeader__submenu-sublist">
                <a className="SubHeader__submenu-text" href="javascript.void()">1</a>
                <span className="SubHeader__submenu-text">2</span>
                <span className="SubHeader__submenu-text">3</span>
                <span className="SubHeader__submenu-text">4</span>
              </div>
            </div>
          </div>
          <div className="SubHeader__submenu-group">
            <div className="SubHeader__submenu-list">
              <span className="SubHeader__submenu-text">Значения</span>
              <div className="SubHeader__submenu-sublist">
                <a className="SubHeader__submenu-text" href="javascript.void()">1</a>
                <span className="SubHeader__submenu-text">2</span>
                <span className="SubHeader__submenu-text">3</span>
                <span className="SubHeader__submenu-text">4</span>
              </div>
            </div>
            <div className="SubHeader__submenu-list">
              <span className="SubHeader__submenu-text">История значения</span>
              <div className="SubHeader__submenu-sublist">
                <a className="SubHeader__submenu-text" href="javascript.void()">1</a>
                <span className="SubHeader__submenu-text">2</span>
                <span className="SubHeader__submenu-text">3</span>
                <span className="SubHeader__submenu-text">4</span>
              </div>
            </div>
            <div className="SubHeader__submenu-list">
              <span className="SubHeader__submenu-text">Пороговые значения</span>
              <div className="SubHeader__submenu-sublist">
                <a className="SubHeader__submenu-text" href="javascript.void()">1</a>
                <span className="SubHeader__submenu-text">2</span>
                <span className="SubHeader__submenu-text">3</span>
                <span className="SubHeader__submenu-text">4</span>
              </div>
            </div>
            <div className="SubHeader__submenu-checkbox">
              <span className="SubHeader__submenu-text">Видеотрансляция со скважины</span>
            </div>
            <div className="SubHeader__submenu-checkbox active">
              <span className="SubHeader__submenu-text">Схема скважины и оборудования</span>
            </div>
            <div className="SubHeader__submenu-checkbox active">
              <span className="SubHeader__submenu-text">Виброакустичекий фон</span>
            </div>
            <div className="SubHeader__submenu-checkbox active">
              <span className="SubHeader__submenu-text">Температурный фон</span>
            </div>
            <div className="SubHeader__submenu-checkbox active">
              <span className="SubHeader__submenu-text">Тепловая карта</span>
            </div>
            <div className="SubHeader__submenu-checkbox active">
              <span className="SubHeader__submenu-text">Давление в забое</span>
            </div>
          </div>
        </div>
      </div>
      <div className="SubHeader__block">
        <span>Справка</span>
        <div className="SubHeader__submenu">
          <div className="SubHeader__submenu-group">
            <span className="SubHeader__submenu-text">Любое подменю</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
