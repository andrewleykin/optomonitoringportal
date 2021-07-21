import React from 'react';
import AppStatistics from './components/statistics'
import './App.css';

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

function App() {
  return (
    <div className="App">
      <h1 style={{marginBottom: '2em'}}>Примеры виджетов</h1>
      <div className="AppStatistics">
        <AppStatistics data={AppStatisticsData} onChangeSettings={() => {}} />
      </div>
    </div>
  );
}

export default App;
