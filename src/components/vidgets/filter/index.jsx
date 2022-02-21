import React, { useState } from 'react';
import AppBlock from '../../ui/block';
import AppInput from '../../ui/input';
import AppSelect from '../../ui/select';
import AppButton from '../../ui/button';
import AppDatePicker from '../../ui/datepicker';
import './index.css'

const AppFilter = ({onFilter}) => {
  const [settings, setSettings] = useState({})
  const [editSettings, setEditSettings] = useState(settings)

  const [filter, setFilter] = useState({
    dateFrom: '',
    dateTo: '',
    time: 'hour',
    sensitivity: '',
    upper: ''
  })

  const changeFilter = (key, value) => {
    console.log(key, value)
    setFilter({
      ...filter,
      [key]: value
    })
  }

  const onFilterHandler = () => {
    onFilter && onFilter(filter)
  }

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
      Настройка виджета фильтр
    </>
  )

  return (
    <AppBlock 
      title="Виджет фильтр"
      modalTitle="Настройка виджета фильтр"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      <div className="AppFilter">
        <div className="AppFilter__row">
          <div>
            <AppDatePicker value={filter.dateFrom} onChange={value => changeFilter('dateFrom', value)} showTimeInput={false} />
          </div>
          <span className="AppFilter__sub">по</span>
          <div>
            <AppDatePicker value={filter.dateTo} onChange={value => changeFilter('dateTo', value)} showTimeInput={false} />
          </div>
        </div>
        <div className="AppFilter__row">
          <div>
            <span className="AppFilter__label">Дискрет-ть</span>
            <AppSelect value={filter.time} onChange={e => changeFilter('time', e.target.value)} list={[{value:'hour', title:'час'}, {value:'minutes', title:'мин'}]} />
          </div>
          <div>
            <span className="AppFilter__label">Чувств-ть</span>
            <AppInput type="number" value={filter.sensitivity} onChange={e => changeFilter('sensitivity', e.target.value)} />  
          </div>
          <div>
            <span className="AppFilter__label">Верхн.</span>
            <AppInput type="number" value={filter.upper} onChange={e => changeFilter('upper', e.target.value)} />
          </div>
        </div>
        <div className="AppFilter__row">
          <AppButton isWide onClick={onFilterHandler}>Отфильтровать по дате</AppButton>
        </div>
      </div>
    </AppBlock>
  );
}

export default AppFilter;
