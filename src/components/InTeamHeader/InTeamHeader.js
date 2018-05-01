import React, { Component } from 'react';
import './InTeamHeader.css';
import InIcon from '../InIcon/InIcon';
import InAvatar from '../InAvatar/InAvatar';

class InTeamHeader extends Component {
  render() {
    return (
      <div className="InTeamHeader">
        <InAvatar image={this.props.team.Logo} text={this.props.team.Name} size={50} />
        <div className="InTeamHeader-Name">{this.props.team.Name}</div>
      </div>
    );
  }
}

export default InTeamHeader;