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
        <AppCheckbox value={editSettings.showMyThreshold} onChange={value => changeSettings('showMyThreshold', value)} label="???????????????????? ???????????? ???????? ?????????????????? ????????????????" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.showAllCrit} onChange={value => changeSettings('showAllCrit', value)} label="???????????????????? ?????? ?????????????????????? ????????????????" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.emailNotif} onChange={value => changeSettings('emailNotif', value)} label="?????????????????? ???? ?????????? ?????????????????? ???????????? (?????????? ??????????????)" />
        <AppInput value={editSettings.emails} onChange={e => changeSettings('emails', e.target.value)} placeholder="name@company.ru, etc." />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.telegramNotif} onChange={value => changeSettings('telegramNotif', value)} label="?????????????????? ?? Telegram ?????????????????? ???????????? (?????????? ??????????????)" />
        <AppInput value={editSettings.phones} onChange={e => changeSettings('phones', e.target.value)} placeholder="+7 (XXX) XXX-XX-XX, etc. " />
      </AppFormRow>
      <div className="app-threshold-table">
        <h5>
          ?????????????? ?????????????????? ????????????????
        </h5>
        <div className="table">
          <div className="thead">
            <div className="tr">
              <div className="col"></div>
              <div className="col">????????????????????</div>
              <div className="col">??????????</div>
              <div className="col">????????????????</div>
              <div className="col">???????? ????????????????</div>
              <div className="col">??????????????????????</div>
              <div className="col">??????????????</div>
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
                    ??????????????
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="app-threshold-modal-add">
        <h5>???????????????? ?????????????????? ????????????????</h5>
        <form className="app-threshold-modal-add__form" onSubmit={onSubmit}>
          <div className="app-threshold-modal-add__block">
            <label>????????????????</label>
            <ReactSelect name="important" className="select" placeholder="???? ??????????????" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>????????????????????</label>
            <ReactSelect name="variable" className="select" placeholder="???? ??????????????" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>?????? ???????????? ({'>'}, {'<'}, ?? )</label>
            <ReactSelect name="threshold" className="select" placeholder="???? ??????????????" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>????????????????</label>
            <input className="input" type="number" placeholder="0"  name="value" />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>?????????????????? ????????????????</label>
            <input className="input" type="number" placeholder="0"  name="timeInterval" />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>???????????????? ?????????????? (??.)</label>
            <div className="row">
              <div className="col"><input className="input" type="number" placeholder="????" name="startDepth" /></div>
              <div className="col"><input className="input" type="number" placeholder="????" name="endDepth" /></div>
            </div>
          </div>
          <div className="app-threshold-modal-add__block">
            <label>?????????????????? ???????????????? ????????????????????</label>
            <div className="row">
              <div className="col">
                <DatePicker
                  timeInputLabel="????????"
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
                  timeInputLabel="????????"
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
            <label>?????????????????????????? ?????????????? ??????????</label>
            <DatePicker
              timeInputLabel="????????"
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
            <label>??????????????????????</label>
            <input className="input" placeholder="????" name="comment" />
            <button type="submit">????????????????</button>
          </div>
        </form>
      </div>
    </>
  )

  return (
    <AppBlock 
      title="???????????? ?????????????????? ????????????????"
      modalTitle="?????????????????? ?????????????? ?? ?????????????????? ???????????????????? ????????????????????"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isVerticalCollapse
    >
      <div className="app-threshold-table component">
        <div className="table">
          <div className="thead">
            <div className="tr">
              <div className="col">????????????????????</div>
              <div className="col">????????????????</div>
              <div className="col">??????????</div>
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
