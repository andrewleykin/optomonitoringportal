import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import AppButton from '../../ui/button';
import '../threshold/index.css'
import './index.css'

const AppPlay = ({data, onPlay}) => {
  const [settings, setSettings] = useState({})
  const [editSettings, setEditSettings] = useState(settings)
  const [played, setPlayed] = useState(data?.played || false)

  // const changeSettings = (key, show) => {
  //   setEditSettings({
  //     ...editSettings,
  //     [key]: show
  //   })
  // }

  const openModal = () => {
    setEditSettings(settings)
  }

  const confirmModal = () => {
    setSettings(editSettings)
  }

  const modalContent = (
    <>
      Настройки виджета воспроизведения
    </>
  )

  const playData = () => {
    setPlayed(!played)
    onPlay && onPlay(!played)
  }

  return (
    <AppBlock 
      title="Виджет воспроизведения"
      modalTitle="Настройка виджета воспроизведения"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      <div className="app-threshold-table app-play-table">
        <div className="table">
          <div className="thead">
            <div className="tr">
              <div className="col">Дата/Время</div>
              <div className="col">Скважина</div>
            </div>
          </div>
          <div className="tbody scrollbar-style">
            {data.map((item, index) => (
              <div className="tr" key={index}>
                <div className="col">{item.date}</div>
                <div className="col">{item.well}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AppButton type={played ? 'warning' : 'success'} isWide onClick={playData}>{played ? 'Пауза' : 'Воспроизведение данных'}</AppButton>
    </AppBlock>
  );
}

export default AppPlay;
