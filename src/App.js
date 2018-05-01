import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import InNavigation from './components/InNavigation/InNavigation';
import InDashboardPage from './pages/InDashboardPage/InDashboardPage';
import APIService from './services/APIService';
import InTeamPage from './pages/InTeamPage/InTeamPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: null
    }
  }
  componentDidMount() {
    APIService.getUser()
      .then(response => {
        this.setState({ User: response });
      })
  }
  render() {
    return (
      <div className="App">
        <InNavigation user={this.state.User} />
        <Switch>
          <Route exact path='/' 
            render={(props) => (
              <InDashboardPage />
            )}/>
          <Route exact path='/team' 
            render={(props) => (
              <InTeamPage user={this.state.User} />
            )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
