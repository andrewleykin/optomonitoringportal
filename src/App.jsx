import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppHeader from './components/header';
import AppSidebar from './components/sidebar';
import MainPage from './pages/Main';
import './App.css'


function App() {
  return (
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
          <div className="Online">
            Online page
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
