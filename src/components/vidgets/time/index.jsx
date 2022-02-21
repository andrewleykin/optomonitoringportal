import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import './index.css'

const AppTime = ({data}) => {
  const [settings, setSettings] = useState({})
  const [editSettings, setEditSettings] = useState(settings)

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
      Настройка виджета времени
    </>
  )

  return (
    <AppBlock 
      title="Виджет времени"
      modalTitle="Настройка виджета времени"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      <div className="AppTime">Дата и время: <span>{data.date}</span></div>
    </AppBlock>
  );
}

export default AppTime;
