/* eslint-disable import/no-unresolved */
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Dashboard} path="/" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
