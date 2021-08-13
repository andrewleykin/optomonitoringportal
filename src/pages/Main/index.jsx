import React, { useState } from 'react';
import AppStatistics from '../../components/vidgets/statistics';
import AppPickWell from '../../components/vidgets/pickwell';
import AppEvents from '../../components/vidgets/events';
import AppLegends from '../../components/vidgets/legends';
import AppMap from '../../components/vidgets/map';
import AppMapBlock from '../../components/vidgets/map/block';
import './index.css';

const AppStatisticsData = {
  wells: {
    all: 3,
    values: [
      {label: 'Ведется наблюдение', count: 2, color: "#006c42"},
      {label: 'Наблюдение остановлено', count: 1, color: "#43525a"},
    ]
  },
  reports: {
    all: 6,
    values: [
      {label: 'Системных', count: 2, color: "#ff6384"},
      {label: 'Интерпретации', count: 1, color: "#ff9f40"},
      {label: 'Режимы скважины', count: 3, color: "#ffcd56"},
    ]
  },
  events: {
    all: 10,
    values: [
      {label: 'Системных', count: 6, color: "#006c42"},
      {label: 'Критические', count: 1, color: "#e02a27"},
      {label: 'Важные', count: 3, color: "#fddb2a"},
    ]
  }
}

const AppPickWellData = {
  wells: [
    {
      id: "1",
      title: "ПАО “Газпром нефть”",
      count: "4",
      statuses: ["#006c42", "#43525a", "#fddb2a", "#e02a27"],
      childrens: [
        {
          id: "1.1",
          title: "ПАО “Газпромнефть-Хантос”",
          count: "0",
          statuses: ["#006c42", "#fddb2a"],
          childrens: [
            {
              id: "1.1.1",
              title: "Новопортовское НГКМ",
              count: "2",
              statuses: ["#006c42", "#43525a"],
              childrens: [
                {
                  id: "1.1.1.1",
                  title: "Куст № 7",
                  count: "2",
                  statuses: ["#006c42"],
                  childrens: [
                    {
                      id: "1.1.1.1.1",
                      title: "Скважина 2066",
                      statuses: ["#006c42"],
                    }
                  ]
                },
                {
                  id: "1.1.1.2",
                  title: "Куст № 9",
                  count: "2",
                  statuses: ["#006c42"],
                  childrens: [
                    {
                      id: "1.1.1.2.1",
                      title: "Москва",
                      statuses: ["#006c42"],
                    }
                  ]
                }
              ],
            }
          ],
        }
      ],
    }
  ]
}

const AppEventsData = [
  {
    color: '#006c42',
    date: '03.05.2021',
    time: '15:00',
    well: '2096',
    bush: 'куст',
    field: 'месторождение',
    organization: 'организация 1',
    organization_two: 'организация 2',
    event: 'смена чего-то'
  },
  {
    color: '#fddb2a',
    date: '03.05.2021',
    time: '15:00',
    well: '2096',
    bush: 'куст',
    field: 'месторождение',
    organization: 'организация 1',
    organization_two: 'организация 2',
    event: 'смена чего-то'
  }
]

const AppLegendsData = [
  {
    title: 'Режим работы на скважине',
    count: 3,
    childrens: [
      {
        title: 'Ведется наблюдение',
        color: '#006c42'
      }
    ]
  },
  {
    title: 'События на скважине',
    count: 4,
    childrens: [
      {
        title: 'Критическое событие',
        color: '#e02a27'
      }
    ]
  }
]

const AppMapBlockData = {
  title: 'ПАО “ГАЗПРОМ” — ООО "Газпромнефть-Ямал" — Новопортовское НКГМ — Куст №9 —',
  well: 'Скважина №2066',
  color: '#e02a27',
  warning: 'Внимание! Возможна негерметичность эксплутационной колонны',
  events: [
    {
      title: 'Состояние скважины:',
      color: '#e02a27',
      value: 'В работе'
    },
    {
      title: 'Состояние системы:',
      color: '#fddb2a',
      value: 'Под наблюдением'
    },
    {
      title: 'Датчик DAS:',
      color: '#006c42',
      value: 'Нет связи (21.06.2021  14:20)'
    },
    {
      title: 'Датчик DTS:',
      color: '#006c42',
      value: 'Нет связи 21.06.2021  14:20)'
    },
    {
      title: 'Датчик давления:',
      color: '#e02a27',
      value: 'Нет связи (21.06.2021  14:20)'
    }
  ]
}

const MainPage = () => {
  const [isMapFullScreen, setIsMapFullScreen] = useState(false)
  const toggleFullScreen = () => setIsMapFullScreen(!isMapFullScreen)

  return (
    <div className={`MainPage ${isMapFullScreen ? 'isMapFullScreen' : ''}`}>
      {!isMapFullScreen && (
        <>
          <div className="AppStatistics">
            <AppStatistics data={AppStatisticsData} onChangeSettings={() => {}} />
          </div>
          <div className="AppPickWell">
            <AppPickWell data={AppPickWellData} onChangeSettings={() => {}} />
          </div>
          <div className="AppEvents">
            <AppEvents data={AppEventsData} onChangeSettings={() => {}} />
          </div>
        </>
      )}
      <div className="AppMap">
        <AppMap toggleFullScreen={toggleFullScreen}>
          <h4>Блок при наведении на скважину</h4>
          <AppMapBlock data={AppMapBlockData} onClose={() => {}} onOpen={() => {}} />
        </AppMap>
      </div>
      <div className="AppLegends">
        <AppLegends data={AppLegendsData} />
      </div>
    </div>
  );
}

export default MainPage;