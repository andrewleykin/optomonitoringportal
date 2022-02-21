import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppHeader from './components/header';
import AppSidebar from './components/sidebar';
import MainPage from './pages/Main';
import OnlinePage from './pages/Online';
import HistoryPage from './pages/History';
import './App.css'


function App() {
  return (
    // basename нужен для демонстрации на github
    <Router basename="/optomonitoringportal/build">
      <Switch>
        <Route path="/" exact>
          <AppHeader />
          <AppSidebar />
          <MainPage />
        </Route>
        <Route path="/online">
          <AppHeader />
          <AppSidebar />
          <OnlinePage />
        </Route>
        <Route path="/history">
          <AppHeader />
          <AppSidebar />
          <HistoryPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
