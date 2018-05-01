import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import InNavigation from './components/InNavigation/InNavigation';
import InDashboard from './pages/InDashboard/InDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InNavigation />
        <Switch>
          <Route exact path='/' 
            render={(props) => (
              <InDashboard />
            )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
