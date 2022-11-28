import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Country from './routes/Country';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/:country'>
          <Country />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
