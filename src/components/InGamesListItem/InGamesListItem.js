import React, { Component } from 'react';
import './InGamesListItem.css';
import InAvatar from '../InAvatar/InAvatar';

class InGamesListItem extends Component {
  render() {
    if (!this.props.upcoming) {
      return (
        <div className="InGamesListItem">
          <div className="InGamesListItem-HomeTeam">
            <div className="InGamesListItem-HomeTeam-Name">{this.props.game.HomeTeam.Name}</div>
            <div className="InGamesListItem-HomeTeam-Logo">
              <InAvatar image={this.props.game.HomeTeam.Logo} text={this.props.game.HomeTeam.Name} size={50} />
            </div>
          </div>
          <div className="InGamesListItem-Meta">
            <div className="InGamesListItem-Meta-Score">
              <div className="InGamesListItem-Meta-Score-Home">{this.props.game.FinalScore.HomeTeam}</div>
              <div className="InGamesListItem-Meta-Score-Seperator">-</div>
              <div className="InGamesListItem-Meta-Score-Away">{this.props.game.FinalScore.AwayTeam}</div>
            </div>
            <div className="InGamesListItem-Meta-Date">
              <div>{new Date(this.props.game.Date).toLocaleDateString()}</div>
              <div>{new Date(this.props.game.Date).toLocaleTimeString()}</div>
            </div>
          </div>
          <div className="InGamesListItem-AwayTeam">
            <div className="InGamesListItem-AwayTeam-Logo">
              <InAvatar image={this.props.game.AwayTeam.Logo} text={this.props.game.AwayTeam.Name} size={50} />
            </div>
            <div className="InGamesListItem-AwayTeam-Name">{this.props.game.AwayTeam.Name}</div>
          </div>
        </div>
      );
    }
  }
}

export default InGamesListItem;