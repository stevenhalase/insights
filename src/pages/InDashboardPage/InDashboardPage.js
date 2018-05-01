import React, { Component } from 'react';
import './InDashboardPage.css';
import InAppLink from '../../components/InAppLink/InAppLink';
import TeamBackgroundImage from '../../assets/images/team.jpg';
import RosterBackgroundImage from '../../assets/images/roster.jpg';

class InDashboardPage extends Component {
  render() {
    return (
      <div className="InDashboardPage">
        <InAppLink
          backgroundimage={TeamBackgroundImage}
          text="Team"
          link="/team"/>
        <InAppLink
          backgroundimage={RosterBackgroundImage}
          text="Roster"
          link="/roster"/>
      </div>
    );
  }
}

export default InDashboardPage;