import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import './index.css';

const AppSchema = ({children}) => {
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
      Настройки схемы 2D виджета
    </>
  )

  return (
    <AppBlock 
      title="Схема 2D виджет"
      modalTitle="Настройки схемы 2D виджета"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isHorizontalCollapse
    >
      {children}
    </AppBlock>
  );
}

export default AppSchema;
