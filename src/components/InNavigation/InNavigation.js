import React, { Component } from 'react';
import './InNavigation.css';
import InNavigationItem from '../InNavigationItem/InNavigationItem';
import InNavigationUserItem from '../InNavigationUserItem/InNavigationUserItem';

class InNavigation extends Component {
  render() {
    return (
      <div className="InNavigation">
        <div className="NavLeft">
        </div>
        <div className="NavRight">
          <InNavigationItem 
            text="Team"
            link="/team" />
          <InNavigationItem 
            text="Roster"
            link="/roster" />
          <InNavigationItem 
            icon="mi-ActionCenter"
            text=""
            link="/" />
          {this.props.user ? 
            <InNavigationUserItem 
              user={this.props.user} /> :
            ''}
        </div>
      </div>
    );
  }
}

export default InNavigation;