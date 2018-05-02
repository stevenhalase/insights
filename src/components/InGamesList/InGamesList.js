import React, { Component } from 'react';
import './InGamesList.css';
import InGamesListItem from '../InGamesListItem/InGamesListItem';

class InGamesList extends Component {
  render() {
    return (
      <div className="InGamesList">
        {this.props.games.map((game, ind) => {
          return (
            <InGamesListItem game={game} upcoming={this.props.upcoming} key={ind} />
          )
        })}
      </div>
    );
  }
}

export default InGamesList;