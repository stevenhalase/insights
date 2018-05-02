import React, { Component } from 'react';
import './InTeamPage.css';
import InTeamHeader from '../../components/InTeamHeader/InTeamHeader';
import InLastGame from '../../components/InLastGame/InLastGame';
import InRecentGames from '../../components/InRecentGames/InRecentGames';

class InTeamPage extends Component {
  render() {
    return (
      <div className="InTeamPage">
        {this.props.user ?
          (
            <div>
              <InTeamHeader team={this.props.user.Team} />
              <InLastGame team={this.props.user.Team} />
              <InRecentGames team={this.props.user.Team} skipmostrecent={true} />
            </div>
          ) : ''}
      </div>
    );
  }
}

export default InTeamPage;