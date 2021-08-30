import React, { useState, memo } from 'react';
import { Pie } from 'react-chartjs-2';
import AppBlock from '../../ui/block';
import AppCheckbox from '../../ui/checkbox';
import AppDatePicker from '../../ui/datepicker';
import AppFormRow from '../../ui/formRow';
import {ReactComponent as ChartIcon} from './chart.svg';
import './index.css';

const AppStatisticsInfoItem = memo(({title, count, bold = false, tagColor}) => (
  <div className={`statistics__item-row ${bold ? 'bold' : ''}`}>
    {tagColor && (
      <span className="statistics__item-tag" style={{backgroundColor: tagColor}} />
    )}
    <span className="statistics__item-text">{title}</span>
    <span className="statistics__item-count">{count}</span>
  </div>
))

const AppStatisticsInfoList = memo(({values, isShowTagColor = false}) => values.map((item, index) => (
  <AppStatisticsInfoItem 
    key={index}
    title={item.label} 
    count={item.count} 
    {...{isShowTagColor} && {tagColor: item.color}}
  />
)))

const AppStatisticsItem = memo(({title, data}) => (
  <div className="statistics__item">
    <AppStatisticsInfoItem bold title={title} count={data.all} />
    <AppStatisticsInfoList values={data.values} isShowTagColor />
  </div>
))

const AppStatisticsChart = memo(({title, values}) => (
  <div className="statistics__chart">
    <span className="statistics__chart-title">{title}</span>
    <div className="statistics__chart-chart">
      <Pie 
        data={{
          labels: values.map(item => item.label),
          datasets: [
            {
              data: values.map(item => item.count),
              backgroundColor: values.map(item => item.color)
            },
          ]
        }} 
        options={{
          plugins: {
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
    <AppStatisticsInfoList values={values} />
  </div>
))

const AppStatistics = ({data, settings: propsSettings = {}, onChangeSettings}) => {
  const [isChart, setIsChart] = useState(false);
  const [settings, setSettings] = useState({
    wells: {
      show: true
    },
    reports: {
      show: true,
      date: propsSettings.reports || new Date()
    },
    events: {
      show: true,
      date: propsSettings.events || new Date()
    }
  })
  const [editSettings, setEditSettings] = useState(settings)

  const changeShow = (key, show) => {
    setEditSettings({
      ...editSettings,
      [key]: {
        ...editSettings[key],
        show
      }
    })
  }

  const changeDate = (key, date) => {
    setEditSettings({
      ...editSettings,
      [key]: {
        ...editSettings[key],
        date
      }
    })
  } 

  const openModal = () => {
    setEditSettings(settings)
  }

  const confirmModal = () => {
    setSettings(editSettings)
    if (editSettings.events.date !== settings.events.date || editSettings.reports.date !== settings.reports.date) {
      onChangeSettings({
        events: editSettings.events.date,
        reports: editSettings.reports.date,
      })
    }
  }

  const modalContent = (
    <>
      <AppFormRow>
        <AppCheckbox value={editSettings.wells.show} onChange={value => changeShow('wells', value)} label="Отображать количество скважин в системе" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.events.show} onChange={value => changeShow('events', value)} label="Отображать количество событий" />
        <AppDatePicker value={editSettings.events.date} onChange={date => changeDate('events', date)} />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.reports.show} onChange={value => changeShow('reports', value)} label="Отображать количество отчетов" />
        <AppDatePicker value={editSettings.reports.date} onChange={date => changeDate('reports', date)} />
      </AppFormRow>
    </>
  )

  return (
    <AppBlock 
      title="Виджет со сводной статистикой"
      modalTitle="Настройка виджета со сводной статистикой"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      actions={(
        <>
          <button onClick={() => setIsChart(!isChart)} className={`${isChart ? 'isChartActive' : ''}`}><ChartIcon /></button>
        </>
      )}
    >
      {isChart ? (
        <div className="statistics__charts">
          {settings.wells.show && (
            <AppStatisticsChart title="Скважины в системе" values={data.wells.values} />
          )}
          {settings.reports.show && (
            <AppStatisticsChart title="Отчеты" values={data.reports.values} />
          )}
          {settings.events.show && (
            <AppStatisticsChart title="События" values={data.events.values} />
          )}
        </div>
      ) : (
        <div className="statistics__list">
          {settings.wells.show && (
            <AppStatisticsItem title="Скважины в системе" data={data.wells} />
          )}
          {settings.reports.show && (
            <AppStatisticsItem title="Отчетов сформированно" data={data.reports} />
          )}
          {settings.events.show && (
            <AppStatisticsItem title="Событий зафиксированно" data={data.events} />
          )}
        </div>
      )}
    </AppBlock>
  );
}

export default AppStatistics;
