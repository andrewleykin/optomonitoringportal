import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import './index.css';

const AppSensors = ({data}) => {
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
      Настройка виджета состояния датчиков
    </>
  )

  return (
    <AppBlock 
      title="Виджет состояния датчиков"
      modalTitle="Настройка виджета состояния датчиков"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      <div className="AppSensors__list">
        <div className="AppSensors__item">
          <span className="AppSensors__title">Дата и время:</span>
          <span className="AppSensors__value">{data.date}</span>
        </div>
        <div className={`AppSensors__item ${data.well.status}`}>
          <div className="AppSensors__badge" />
          <span className="AppSensors__title">Состояние скважины:</span>
          <span className="AppSensors__value">{data.well.value}</span>
        </div>
        <div className={`AppSensors__item ${data.system.status}`}>
          <div className="AppSensors__badge" />
          <span className="AppSensors__title">Сост. системы:</span>
          <span className="AppSensors__value">{data.system.value}</span>
        </div>
        <div className={`AppSensors__item ${data.das.status}`}>
          <div className="AppSensors__badge" />
          <span className="AppSensors__title">DAS:</span>
          <span className="AppSensors__value">{data.das.value}</span>
        </div>
        <div className={`AppSensors__item ${data.dts.status}`}>
          <div className="AppSensors__badge" />
          <span className="AppSensors__title">DTS:</span>
          <span className="AppSensors__value">{data.dts.value}</span>
        </div>
        <div className={`AppSensors__item ${data.pressure.status}`}>
          <div className="AppSensors__badge" />
          <span className="AppSensors__title">Датчик давления:</span>
          <span className="AppSensors__value">{data.pressure.value}</span>
        </div>
      </div>
    </AppBlock>
  );
}

export default AppSensors;
