import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import AppCheckbox from '../../ui/checkbox';
import AppFormRow from '../../ui/formRow';
import AppStatusSelect from '../../ui/statusSelect';
import {ReactComponent as FullScreenIcon} from './fullscreen.svg';
import './index.css';

const AppMap = ({settings: propsSettings = {}, onChangeSettings, children, toggleFullScreen}) => {
  const [settings, setSettings] = useState({
    important: propsSettings.important || false,
    critical: propsSettings.critical || false,
    iconWellGroup: propsSettings.iconWellGroup || false,
    stateHover: propsSettings.stateHover || false,
    stateHoverGroup: propsSettings.stateHoverGroup || false,
    showUnwatchWell: propsSettings.showUnwatchWell || false
  })
  const [editSettings, setEditSettings] = useState(settings)

  const changeSettings = (key, show) => {
    setEditSettings({
      ...editSettings,
      [key]: show
    })
  }

  const onChangeStatusShow = (status) => {
    onChangeSettings({
      critical: ['critical', 'all'].includes(status),
      important: ['important', 'all'].includes(status),
      ...settings
    })
  }

  const openModal = () => {
    setEditSettings(settings)
  }

  const confirmModal = () => {
    setSettings(editSettings)
    onChangeSettings(editSettings)
  }

  const modalContent = (
    <>
      <AppFormRow>
        <AppCheckbox value={editSettings.iconWellGroup} onChange={value => changeSettings('count', value)} label="Отображать иконку скважины в зависимости от большего кол-ва скважин в группе" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.stateHover} onChange={value => changeSettings('isOpenTree', value)} label="Показывать состояние скважины при наведении" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.stateHoverGroup} onChange={value => changeSettings('isOpenTree', value)} label="Показывать состояние скважин при наведении на группу" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.showUnwatchWell} onChange={value => changeSettings('isOpenTree', value)} label="Отображать скважины не под наблюдением" />
      </AppFormRow>
    </>
  )

  return (
    <AppBlock 
      title="Виджет с картой месторождений" 
      modalTitle="Настройка виджета с картой месторождений"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      actions={
        <>
          <AppStatusSelect onClick={onChangeStatusShow} />
          <button onClick={toggleFullScreen}>
            <FullScreenIcon />
          </button>
        </>
      }
    >
      {children}
    </AppBlock>
  );
}

export default AppMap;
