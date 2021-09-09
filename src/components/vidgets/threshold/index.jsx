import React, { useState } from 'react';
import ReactSelect from 'react-select';
import DatePicker, { registerLocale } from "react-datepicker";
import AppBlock from '../../ui/block';
import AppFormRow from '../../ui/formRow';
import AppCheckbox from '../../ui/checkbox';
import AppInput from '../../ui/input';
import './index.css';
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('ru', ru)

const AppThreshold = ({data, onAddData, onChangeStatus, onDeleteData, settings: propsSettings = {}, onChangeSettings}) => {
  const [settings, setSettings] = useState({
    showMyThreshold: propsSettings.showMyThreshold || false,
    showAllCrit: propsSettings.showAllCrit || false,
    emailNotif: propsSettings.emailNotif || false,
    emails: propsSettings.emails || '',
    telegramNotif: propsSettings.telegramNotif || false,
    phones: propsSettings.phones || ''
  })

  const [addThresholdDate, setAddThresholdDate] = useState({
    startWatch: new Date(),
    endWatch: new Date(),
    deleteAfter: new Date()
  })
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

    onChangeSettings && onChangeSettings(editSettings)
  }

  const CustomDropdownIndicator = ({ innerProps }) => (
    <div {...innerProps} className="dropdown" />
  )
  const CustomIndicatorSeparator = () => null

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onAddData && onAddData(formProps)
  } 

  const onChangeStatusHandler = (status, id) => {
    onChangeStatus && onChangeStatus(status, id)
  }

  const onDeleteDataHandler = (id) => {
    onDeleteData && onDeleteData(id)
  } 

  const modalContent = (
    <>
      <AppFormRow>
        <AppCheckbox value={editSettings.showMyThreshold} onChange={value => changeSettings('showMyThreshold', value)} label="Отображать только свои пороговые значения" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.showAllCrit} onChange={value => changeSettings('showAllCrit', value)} label="Отображать все критические значения" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.emailNotif} onChange={value => changeSettings('emailNotif', value)} label="Оповещать по почте следующие адреса (через запятую)" />
        <AppInput value={editSettings.emails} onChange={e => changeSettings('emails', e.target.value)} placeholder="name@company.ru, etc." />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.telegramNotif} onChange={value => changeSettings('telegramNotif', value)} label="Оповещать в Telegram следующие номера (через запятую)" />
        <AppInput value={editSettings.phones} onChange={e => changeSettings('phones', e.target.value)} placeholder="+7 (XXX) XXX-XX-XX, etc. " />
      </AppFormRow>
      <div className="app-threshold-table">
        <h5>
          Таблица пороговых значений
        </h5>
        <div className="table">
          <div className="thead">
            <div className="tr">
              <div className="col"></div>
              <div className="col">Переменная</div>
              <div className="col">Порог</div>
              <div className="col">Назначил</div>
              <div className="col">Дата создания</div>
              <div className="col">Комментарий</div>
              <div className="col">Удалить</div>
            </div>
          </div>
          <div className="tbody scrollbar-style">
            {data.map(item => (
              <div className="tr" key={item.id}>
                <div className="col">
                  <div className="checkbox">
                    {/* TODO: */}
                    <input type="checkbox" id={item.id} checked={item.isActive} onChange={e => onChangeStatusHandler(e.target.checked, item.id)} />
                    <label htmlFor={item.id} />
                  </div>
                  <div className="badge" style={{backgroundColor: item.color}}></div>
                </div>
                <div className="col">{item.variable}</div>
                <div className="col">{item.threshold}</div>
                <div className="col">{item.createdUser}</div>
                <div className="col">{item.createdAt}</div>
                <div className="col">{item.comment}</div>
                <div className="col">
                  <button className="button" disabled={!item.isActive} onClick={() => onDeleteDataHandler(item.id)}>
                    удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="app-threshold-modal-add">
        <h5>Добавить пороговое значение</h5>
        <form className="app-threshold-modal-add__form" onSubmit={onSubmit}>
          <div className="app-threshold-modal-add__block">
            <label>Важность</label>
            <ReactSelect name="important" className="select" placeholder="не выбрано" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Переменная</label>
            <ReactSelect name="variable" className="select" placeholder="не выбрано" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Тип порога ({'>'}, {'<'}, Δ )</label>
            <ReactSelect name="threshold" className="select" placeholder="не выбрано" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Значение</label>
            <input className="input" type="number" placeholder="0"  name="value" />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Временной интервал</label>
            <input className="input" type="number" placeholder="0"  name="timeInterval" />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Диапазон глубины (м.)</label>
            <div className="row">
              <div className="col"><input className="input" type="number" placeholder="От" name="startDepth" /></div>
              <div className="col"><input className="input" type="number" placeholder="До" name="endDepth" /></div>
            </div>
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Временной интервал наблюдения</label>
            <div className="row">
              <div className="col">
                <DatePicker
                  timeInputLabel="дата"
                  dateFormat="MM/dd/yyyy h:mm"
                  showTimeInput
                  locale="ru"
                  className="datepicker"
                  name="startWatch"
                  selected={addThresholdDate.startWatch} 
                  onChange={(startWatch) => setAddThresholdDate({...addThresholdDate, startWatch})}
                />
              </div>
              <div className="col">
                <DatePicker
                  timeInputLabel="дата"
                  dateFormat="MM/dd/yyyy h:mm"
                  showTimeInput
                  locale="ru"
                  className="datepicker"
                  name="endWatch"
                  selected={addThresholdDate.endWatch} 
                  onChange={(endWatch) => setAddThresholdDate({...addThresholdDate, endWatch})}
                />
              </div>
            </div>
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Автоматически удалить после</label>
            <DatePicker
              timeInputLabel="дата"
              dateFormat="MM/dd/yyyy h:mm"
              showTimeInput
              locale="ru"
              className="datepicker"
              name="deleteAfter"
              selected={addThresholdDate.deleteAfter} 
              onChange={(deleteAfter) => setAddThresholdDate({...addThresholdDate, deleteAfter})}
            />
          </div>
          <div className="app-threshold-modal-add__footer">
            <label>Комментарий</label>
            <input className="input" placeholder="от" name="comment" />
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </>
  )

  return (
    <AppBlock 
      title="Виджет пороговых значений"
      modalTitle="Настройка виджета с заданными пороговыми значениями"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      <div className="app-threshold-table component">
        <div className="table">
          <div className="thead">
            <div className="tr">
              <div className="col">Переменная</div>
              <div className="col">Значение</div>
              <div className="col">Порог</div>
            </div>
          </div>
          <div className="tbody scrollbar-style">
            {data.map(item => {
              if (!item.isActive) return null

              return (
                <div className="tr" key={item.id}>
                  <div className="col">
                    <div className="badge" style={{backgroundColor: item.color}}></div>
                  </div>
                  <div className="col">{item.variable}</div>
                  <div className="col">{item.value}</div>
                  <div className="col">{item.threshold}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AppBlock>
  );
}

export default AppThreshold;
