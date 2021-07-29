import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import AppCheckbox from '../../ui/checkbox';
import AppDatePicker from '../../ui/datepicker';
import AppFormRow from '../../ui/formRow';
import AppStatusSelect from '../../ui/statusSelect';
import './index.css';

const TABLE_COLUMNS = [
  {
    key: 'color',
    label: ''
  },
  {
    key: 'date',
    label: 'Дата'
  },
  {
    key: 'time',
    label: 'Время'
  },
  {
    key: 'well',
    label: 'Скважина'
  },
  {
    key: 'bush',
    label: 'Куст'
  },
  {
    key: 'field',
    label: 'Месторождение'
  },
  {
    key: 'organization',
    label: 'Организация'
  },
  {
    key: 'organization_two',
    label: 'Организация'
  },
  {
    key: 'event',
    label: 'Событие'
  }
]

const AppEvents = ({data, settings: propsSettings = {}, onChangeSettings}) => {
  const [settings, setSettings] = useState({
    important: propsSettings.important || false,
    critical: propsSettings.critical || false,
    date: propsSettings.date
  })
  const [editSettings, setEditSettings] = useState(settings)

  const changeSettings = (key, value) => {
    setEditSettings({
      ...editSettings,
      [key]: value
    })
  }

  const openModal = () => {
    setEditSettings(settings)
  }

  const confirmModal = () => {
    setSettings(editSettings)
    onChangeSettings(editSettings)
  }

  const onChangeStatusShow = (status) => {
    onChangeSettings({
      critical: ['critical', 'all'].includes(status),
      important: ['important', 'all'].includes(status),
      date: null
    })
  }

  const modalContent = (
    <>
      <AppFormRow>
        <AppCheckbox value={editSettings.important} onChange={value => changeSettings('important', value)} label="Отображать только важные события" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.critical} onChange={value => changeSettings('critical', value)} label="Отображать только критичиские события" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={!!editSettings.date} label="Отображать события с указанный даты" />
        <AppDatePicker value={editSettings.date} onChange={date => changeSettings('date', date)} />
      </AppFormRow>
    </>
  )

  return (
    <AppBlock 
      title="Виджет со сводной статистикой" 
      modalTitle="Настройка виджета со списком событий на месторождении"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      actions={<AppStatusSelect onClick={onChangeStatusShow} />}
    >
      {data.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <table className="app-events__table">
          <thead>
            <tr>
              {TABLE_COLUMNS.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {TABLE_COLUMNS.map(col => (
                  <td key={col.key}>{col.key === 'color' ? <span className="app-events__table-badge" style={{backgroundColor: row[col.key]}}></span> : row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AppBlock>
  );
}

export default AppEvents;
