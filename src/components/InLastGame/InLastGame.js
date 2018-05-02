import React, { Component } from 'react';
import './InLastGame.css';
import InAvatar from '../InAvatar/InAvatar';
import InGamesList from '../InGamesList/InGamesList';

class InLastGame extends Component {
  render() {
    let lastGame = null;
    if (this.props.team.Games.length > 0) {
      let pastGames = this.props.team.Games.filter(game => {
        return new Date(game.Date) < new Date();
      })
      if (pastGames.length > 0) {
        pastGames.sort((a, b) => {
          return new Date(a.Date) - new Date(b.Date);
        })
        lastGame = pastGames[pastGames.length - 1];
      }
    }
    if (lastGame) {
      return (
        <div className="InLastGame">
          <div className="InLastGame-Header">Last Game</div>
          <InGamesList games={[lastGame]} upcoming={false} />
        </div>
      );
    } else {
      return (
        <div className="InLastGame">
          <div className="InLastGame-Header">Last Game</div>
          <span>No games found</span>
        </div>
      );
    }
  }
}

export default InLastGame;