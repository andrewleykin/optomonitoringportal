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

const AppThreshold = () => {
  const [settings, setSettings] = useState({
    showMyThreshold: false,
    showAllCrit: false,
    emailNotif: false,
    emails: '',
    telegramNotif: false,
    phones: ''
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
  }

  const CustomDropdownIndicator = ({ innerProps }) => (
    <div {...innerProps} className="dropdown" />
  )
  const CustomIndicatorSeparator = () => null

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
          <div className="tbody">
            <div className="tr">
              <div className="col">
                <div className="checkbox">
                  {/* Связать инпут и лейбл с помощью id обязательно */}
                  <input type="checkbox" id="1" />
                  <label htmlFor="1" />
                </div>
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">{'<'}25</div>
              <div className="col">Щербаков А.В.</div>
              <div className="col">21.03.2021   14:10</div>
              <div className="col">Проверка гипотезы чего-либо</div>
              <div className="col">
                {/* Добавить атрибут disabled для другого стиля кнопки */}
                <button className="button">
                  удалить
                </button>
              </div>
            </div>
            <div className="tr">
              <div className="col">
                <div className="checkbox">
                  {/* Связать инпут и лейбл с помощью id обязательно */}
                  <input type="checkbox" id="2" />
                  <label htmlFor="2" />
                </div>
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">{'<'}25</div>
              <div className="col">Щербаков А.В.</div>
              <div className="col">21.03.2021   14:10</div>
              <div className="col">Проверка гипотезы чего-либо</div>
              <div className="col">
                {/* Добавить атрибут disabled для другого стиля кнопки */}
                <button className="button">
                  удалить
                </button>
              </div>
            </div>
            <div className="tr">
              <div className="col">
                <div className="checkbox">
                  {/* Связать инпут и лейбл с помощью id обязательно */}
                  <input type="checkbox" id="3" />
                  <label htmlFor="3" />
                </div>
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">{'<'}25</div>
              <div className="col">Щербаков А.В.</div>
              <div className="col">21.03.2021   14:10</div>
              <div className="col">Проверка гипотезы чего-либо</div>
              <div className="col">
                {/* Добавить атрибут disabled для другого стиля кнопки */}
                <button className="button">
                  удалить
                </button>
              </div>
            </div>
            <div className="tr">
              <div className="col">
                <div className="checkbox">
                  {/* Связать инпут и лейбл с помощью id обязательно */}
                  <input type="checkbox" id="4" />
                  <label htmlFor="4" />
                </div>
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">{'<'}25</div>
              <div className="col">Щербаков А.В.</div>
              <div className="col">21.03.2021   14:10</div>
              <div className="col">Проверка гипотезы чего-либо</div>
              <div className="col">
                {/* Добавить атрибут disabled для другого стиля кнопки */}
                <button className="button">
                  удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-threshold-modal-add">
        <h5>Добавить пороговое значение</h5>
        <form className="app-threshold-modal-add__form">
          <div className="app-threshold-modal-add__block">
            <label>Важность</label>
            <ReactSelect className="select" placeholder="не выбрано" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Переменная</label>
            <ReactSelect className="select" placeholder="не выбрано" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Тип порога ({'>'}, {'<'}, Δ )</label>
            <ReactSelect className="select" placeholder="не выбрано" options={[{value: 1, label: '1'}]} components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: CustomIndicatorSeparator}} />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Значение</label>
            <input className="input" type="number" placeholder="0" />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Временной интервал</label>
            <input className="input" type="number" placeholder="0" />
          </div>
          <div className="app-threshold-modal-add__block">
            <label>Диапазон глубины (м.)</label>
            <div className="row">
              <div className="col"><input className="input" type="number" placeholder="От" /></div>
              <div className="col"><input className="input" type="number" placeholder="До" /></div>
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
                />
              </div>
              <div className="col">
                <DatePicker
                  timeInputLabel="дата"
                  dateFormat="MM/dd/yyyy h:mm"
                  showTimeInput
                  locale="ru"
                  className="datepicker"
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
            />
          </div>
          <div className="app-threshold-modal-add__footer">
            <label>Комментарий</label>
            <input className="input" placeholder="от" />
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
          <div className="tbody">
            <div className="tr">
              <div className="col">
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">24.515</div>
              <div className="col">{'<'}25</div>
            </div>
            <div className="tr">
              <div className="col">
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">24.515</div>
              <div className="col">{'<'}25</div>
            </div>
            <div className="tr">
              <div className="col">
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">24.515</div>
              <div className="col">{'<'}25</div>
            </div>
            <div className="tr">
              <div className="col">
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">24.515</div>
              <div className="col">{'<'}25</div>
            </div>
            <div className="tr">
              <div className="col">
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">24.515</div>
              <div className="col">{'<'}25</div>
            </div>
            <div className="tr">
              <div className="col">
                <div className="badge" style={{backgroundColor: '#006c42'}}></div>
              </div>
              <div className="col">P (Атм.)</div>
              <div className="col">24.515</div>
              <div className="col">{'<'}25</div>
            </div>
          </div>
        </div>
      </div>
    </AppBlock>
  );
}

export default AppThreshold;
