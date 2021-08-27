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

  const [activeVidgets, setActiveVidgets] = useState(vidgets.map(item => item.key))
  const isActiveVidget = (key) => activeVidgets.includes(key)

  const toggleVidget = (key) => {
    let newActiveVidgets = [...activeVidgets];
    isActiveVidget(key) 
      ? newActiveVidgets = newActiveVidgets.filter(item => item !== key) 
      : newActiveVidgets.push(key)

    setActiveVidgets(newActiveVidgets)
  }

  return (
    <div className="OnlinePage">
      <div className="OnlinePage__header">
        {vidgets.map(vidget => (
          <button 
            key={vidget.key}
            className={`${isActiveVidget(vidget.key) ? 'active' : ''}`} 
            onClick={() => toggleVidget(vidget.key)} 
          >
            {vidget.button}
          </button>
        ))}
      </div>
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
            <AppThreshold />
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
