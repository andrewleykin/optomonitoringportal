import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import './index.css'

const AppParametrs = ({data}) => {
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
      Настройка виджета с данными
    </>
  )

  return (
    <AppBlock 
      title="Виджет с данными"
      modalTitle="Настройка виджета с данными"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      <div className="AppParametrs__list">
        <div className="AppParametrs__item">
          <span className="AppParametrs__title">Параметры на устье:</span>
          <span className="AppParametrs__text">P (Атм.) = {data.mouth.p}</span>
          <span className="AppParametrs__text">Q (м3/ч) = {data.mouth.q}</span>
        </div>
        <div className="AppParametrs__item">
          <span className="AppParametrs__title">Параметры на забое:</span>
          <span className="AppParametrs__text">P (Атм.) = {data.slaughter.p}</span>
        </div>
      </div>
    </AppBlock>
  );
}

export default AppParametrs;
