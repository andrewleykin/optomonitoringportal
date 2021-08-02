import React from 'react';
import './index.css';

const AppMapBlock = ({data, onClose, onOpen}) => {
  return (
    <div className="app-map-block">
      <div className="app-map-block__status" style={{backgroundColor: data.color}} />
      <button className="app-map-block__close" onClick={onClose}>X</button>
      <h3 className="app-map-block__title">{data.title}</h3>
      <div className="app-map-block__well">
        <div className="app-map-block__badge" style={{backgroundColor: data.color}} />
        Скважина №2066
      </div>
      {data.warning && (
        <div className="app-map-block__warning">{data.warning}</div>
      )}
      <ul className="app-map-block__list">
        {data.events.map((event, index) => (
          <li key={index}>
            <span className="app-map-block__list-title">{event.title}</span>
            <div className="app-map-block__badge" style={{backgroundColor: event.color}} />
            {event.value}
          </li>
        ))}
      </ul>
      <button className="app-map-block__btn" onClick={onOpen}>Открыть</button>
    </div>
  );
}

export default AppMapBlock;
