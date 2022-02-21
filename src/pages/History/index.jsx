import React, { useState } from 'react';
import AppTime from '../../components/vidgets/time';
import AppParametrs from '../../components/vidgets/parametrs';
import AppFilter from '../../components/vidgets/filter';
import AppPlay from '../../components/vidgets/play';
import AppSchema from '../../components/vidgets/schema';
import AppDts from '../../components/vidgets/dts';
import AppDtsMap from '../../components/vidgets/dtsmap';
import AppDas from '../../components/vidgets/das';
import AppPlayback from '../../components/vidgets/playback'
import SubHeader from '../../components/subheader';
import './index.css';

const AppTimeData = {
  date: '21.05.2021 23:00'
}

const AppParametrsData = {
  mouth: {
    p: 123,
    q: 7
  },
  slaughter: {
    p: 135.3
  }
}

const AppPlayData = [
  {
    date: '03.05.2021 15:00',
    well: 'Dшт=14'
  },
  {
    date: '03.05.2021 15:00',
    well: 'Остановка'
  },
  {
    date: '03.05.2021 15:00',
    well: 'Dшт=14'
  },
  {
    date: '03.05.2021 15:00',
    well: 'Начало гидродин...'
  },
  {
    date: '03.05.2021 15:00',
    well: 'Dшт=14'
  },
  {
    date: '03.05.2021 15:00',
    well: 'Dшт=14'
  },
  {
    date: '03.05.2021 15:00',
    well: 'Dшт=14'
  }
]

const HistoryPage = () => {

  const vidgets = [
    {
      key: 'AppTime',
      button: 'TIME'
    },
    {
      key: 'AppParametrs',
      button: 'DATA'
    },
    {
      key: 'AppFilter',
      button: 'FILTER'
    },
    {
      key: 'AppPlay',
      button: 'PLAY'
    },
    {
      key: 'AppSchema',
      button: 'SCHEMA'
    },
    {
      key: 'AppDas',
      button: 'DAS'
    },
    {
      key: 'AppDtsMap',
      button: 'DTS MAP'
    },
    {
      key: 'AppDts',
      button: 'DTS'
    },
    {
      key: 'AppPlayback',
      button: 'PLAYBACK'
    }
  ]

  const [activeVidgets] = useState(vidgets.map(item => item.key))
  const isActiveVidget = (key) => activeVidgets.includes(key)

  return (
    <div className="HistoryPage">
      <SubHeader />
      <div className="HistoryPage__vidgets">
        {activeVidgets.length === 0 && (
          <h2 className="HistoryPage__empty">Выберете виджеты для отображения на странице</h2>
        )}
        <div className="col">
          {isActiveVidget('AppTime') && (
            <AppTime data={AppTimeData} />
          )}
          {isActiveVidget('AppParametrs') && (
            <AppParametrs data={AppParametrsData} />
          )}
          {isActiveVidget('AppFilter') && (
            <AppFilter />
          )}
          {isActiveVidget('AppPlay') && (
            <AppPlay data={AppPlayData} />
          )}
        </div>
        <div className="col">
          <div className="row">
            {isActiveVidget('AppSchema') && (
              <AppSchema>AppSchema content</AppSchema>
            )}
            {isActiveVidget('AppDas') && (
              <AppDas>AppDas content</AppDas>
            )}
            {isActiveVidget('AppDtsMap') && (
              <AppDtsMap>AppDtsMap content</AppDtsMap>
            )}
            {isActiveVidget('AppDts') && (
              <AppDts>AppDts content</AppDts>
            )}
          </div>
          {isActiveVidget('AppPlayback') && (
            <div className="AppPlayback">
              <AppPlayback>AppPlayback content</AppPlayback>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
