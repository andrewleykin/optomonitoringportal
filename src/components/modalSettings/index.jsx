import React from 'react';
import AppFormRow from '../ui/formRow';
import AppCheckbox from '../ui/checkbox';
import './index.css';

const data = [
  {
    key: 'legendLeft',
    label: 'Отображать легенду глубины слева'
  },
  {
    key: 'legendRight',
    label: 'Отображать легенду глубины справа'
  },
  {
    key: 'depthLeft',
    label: 'Отображать легенду абсолютной глубины слева'
  },
  {
    key: 'depthRight',
    label: 'Отображать легенду абсолютной глубины справа'
  },
  {
    key: 'absLeft',
    label: 'Отображать числовую сетку абс. глубины слева'
  },
  {
    key: 'absRight',
    label: 'Отображать числовую сетку абс. глубины справа'
  },
  {
    key: 'legendDown',
    label: 'Отображать легенду снизу'
  },
  {
    key: 'legendUp',
    label: 'Отображать легенду сверху'
  },
  {
    key: 'gridDown',
    label: 'Отображать числовую сетку снизу'
  },
  {
    key: 'gridUp',
    label: 'Отображать числовую сетку сверху'
  }
]

const AppModalSettings = (settings, changeSettings) => {
  return (
    <div className="modal-settings">
      {data.map(item => (
        <AppFormRow>
          <AppCheckbox 
            label={item.label} 
            value={settings[item.key]} 
            onChange={value => changeSettings(item.key, value)} 
          />
        </AppFormRow>
      ))}
    </div>
  );
}

export default AppModalSettings;
