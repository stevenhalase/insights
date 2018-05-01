import React, { Component } from 'react';
import './InTeamPage.css';
import InTeamHeader from '../../components/InTeamHeader/InTeamHeader';

class InTeamPage extends Component {
  render() {
    return (
      <div className="InTeamPage">
        {this.props.user ?
          <InTeamHeader team={this.props.user.Team} /> : ''}
      </div>
    );
  }
}

export default InTeamPage;