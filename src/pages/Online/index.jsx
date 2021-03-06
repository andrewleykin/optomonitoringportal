import React, { useState } from 'react';
import AppSensors from '../../components/vidgets/sensors';
import AppParametrs from '../../components/vidgets/parametrs';
import AppThreshold from '../../components/vidgets/threshold';
import AppCamera from '../../components/vidgets/camera';
import AppHistory from '../../components/vidgets/history';
import AppSchema from '../../components/vidgets/schema';
import AppDts from '../../components/vidgets/dts';
import AppDtsMap from '../../components/vidgets/dtsmap';
import AppDas from '../../components/vidgets/das';
import SubHeader from '../../components/subheader';
import './index.css';

const AppSensorsData = {
  date: '21.05.2021 23:00',
  well: {
    status: 'success',
    value: 'В работе'
  },
  system: {
    status: 'success',
    value: 'Под наблюдением'
  },
  das: {
    status: 'success',
    value: '21.05.2021 23:01'
  },
  dts: {
    status: 'warning',
    value: 'нет связи 21.05.2021 23:02'
  },
  pressure: {
    status: 'error',
    value: '21.05.2021 23:03'
  }
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

const AppThresholdData = [
  {
    id: 1,
    variable: 'P (Атм.)',
    value: '25.14',
    threshold: '<25',
    createdUser: 'Щербаков А.В.',
    createdAt: '21.03.2021   14:10',
    comment: 'comment',
    isActive: true,
    color: '#006c42'
  },
  {
    id: 2,
    variable: 'P (Атм.)',
    value: '25.24',
    threshold: '<25',
    createdUser: 'Щербаков А.В.',
    createdAt: '21.03.2021   14:10',
    comment: 'comment2',
    isActive: true,
    color: '#006c42'
  },
  {
    id: 3,
    variable: 'P (Атм.)',
    value: '25.34',
    threshold: '<25',
    createdUser: 'Щербаков А.В.',
    createdAt: '21.03.2021   14:10',
    comment: 'comment3',
    isActive: false,
    color: '#006c42'
  },
  {
    id: 4,
    variable: 'P (Атм.)',
    value: '25.34',
    threshold: '<25',
    createdUser: 'Щербаков А.В.',
    createdAt: '21.03.2021   14:10',
    comment: 'comment3',
    isActive: true,
    color: '#006c42'
  },
  {
    id: 5,
    variable: 'P (Атм.)',
    value: '25.34',
    threshold: '<25',
    createdUser: 'Щербаков А.В.',
    createdAt: '21.03.2021   14:10',
    comment: 'comment3',
    isActive: true,
    color: '#006c42'
  },
  {
    id: 6,
    variable: 'P (Атм.)',
    value: '25.34',
    threshold: '<25',
    createdUser: 'Щербаков А.В.',
    createdAt: '21.03.2021   14:10',
    comment: 'comment3',
    isActive: true,
    color: '#006c42'
  }
]

const OnlinePage = () => {

  const vidgets = [
    {
      key: 'AppSensors',
      button: 'SKMS DATA'
    },
    {
      key: 'AppParametrs',
      button: 'DATA'
    },
    {
      key: 'AppThreshold',
      button: 'ALARM DATA'
    },
    {
      key: 'AppCamera',
      button: 'CAM'
    },
    {
      key: 'AppHistory',
      button: 'DATA MAP'
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
    }
  ]

  const [activeVidgets] = useState(vidgets.map(item => item.key))
  const isActiveVidget = (key) => activeVidgets.includes(key)

  return (
    <div className="OnlinePage">
      <SubHeader />
      <div className="OnlinePage__vidgets">
        {activeVidgets.length === 0 && (
          <h2 className="OnlinePage__empty">Выберете виджеты для отображения на странице</h2>
        )}
        <div className="col">
          {isActiveVidget('AppSensors') && (
            <AppSensors data={AppSensorsData} />
          )}
          {isActiveVidget('AppParametrs') && (
            <AppParametrs data={AppParametrsData} />
          )}
          {isActiveVidget('AppThreshold') && (
            <AppThreshold data={AppThresholdData} />
          )}
          {isActiveVidget('AppCamera') && (
            <AppCamera>AppCamera content</AppCamera>
          )}
          {isActiveVidget('AppHistory') && (
            <AppHistory>AppHistory content</AppHistory>
          )}
        </div>
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
    </div>
  );
}

export default OnlinePage;
