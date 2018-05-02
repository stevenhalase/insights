import React, { Component } from 'react';
import './InRecentGames.css';
import InGamesList from '../InGamesList/InGamesList';

class InRecentGames extends Component {
  render() {
    let pastGames = null;
    if (this.props.team.Games.length > 0) {
      pastGames = this.props.team.Games.filter(game => {
        return new Date(game.Date) < new Date();
      })
      if (pastGames.length > 0) {
        pastGames.sort((a, b) => {
          return new Date(b.Date) - new Date(a.Date);
        })
      }
      if (this.props.skipmostrecent) {
        pastGames.splice(0,1);
      }
    }
    if (pastGames) {
      return (
        <div className="InRecentGames">
          <div className="InRecentGames-Header">Recent Games</div>
          <InGamesList games={pastGames} upcoming={false} />
        </div>
      );
    } else {
      return (
        <div className="InRecentGames">
          <div className="InRecentGames-Header">Last Game</div>
          <span>No games found</span>
        </div>
      );
    }
  }
}

export default InRecentGames;