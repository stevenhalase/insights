import React, { Component } from 'react';
import './InDashboard.css';
import InAppLink from '../../components/InAppLink/InAppLink';

class InDashboard extends Component {
  render() {
    return (
      <div className="InDashboard">
        <InAppLink
          icon="mi-Megaphone"
          text="Team"
          link="/team"/>
        <InAppLink
          icon="mi-People"
          text="Roster"
          link="/roster"/>
      </div>
    );
  }
}

export default InDashboard;