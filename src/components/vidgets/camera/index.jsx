import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import './index.css';

const AppCamera = ({children}) => {
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
      Настройки виджета онлайн камеры
    </>
  )

  return (
    <AppBlock 
      title="Онлайн камера"
      modalTitle="Настройки виджета онлайн камеры"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      {children}
    </AppBlock>
  );
}

export default AppCamera;
