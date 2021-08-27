import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import './index.css';

const AppHistory = ({children}) => {
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
      Настройки виджета с историей данных
    </>
  )

  return (
    <AppBlock 
      title="Виджет с историей данных"
      modalTitle="Настройки виджета с историей данных"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      {children}
    </AppBlock>
  );
}

export default AppHistory;
