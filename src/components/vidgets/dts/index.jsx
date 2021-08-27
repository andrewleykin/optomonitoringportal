import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import AppModalSettings from '../../modalSettings';
import './index.css';

const AppDts = ({children}) => {
  const [settings, setSettings] = useState({})
  const [editSettings, setEditSettings] = useState(settings)

  const changeSettings = (key, show) => {
    setEditSettings({
      ...editSettings,
      [key]: show
    })
  }

  const openModal = () => {
    setEditSettings(settings)
  }

  const confirmModal = () => {
    setSettings(editSettings)
  }

  return (
    <AppBlock 
      title="DTS"
      modalTitle="Настройки виджета DTS"
      modalContent={<AppModalSettings settings={editSettings} changeSettings={changeSettings} />}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isHorizontalCollapse
    >
      {children}
    </AppBlock>
  );
}

export default AppDts;
