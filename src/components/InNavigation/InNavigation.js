import React, { Component } from 'react';
import './InNavigation.css';
import InNavigationItem from '../InNavigationItem/InNavigationItem';

class InNavigation extends Component {
  render() {
    return (
      <div className="InNavigation">
        <div className="NavLeft">
        </div>
        <div className="NavRight">
          <InNavigationItem 
            icon="mi-Megaphone"
            text="Team"
            link="/team" />
          <InNavigationItem 
            icon="mi-People"
            text="Roster"
            link="/roster" />
          <InNavigationItem 
            icon="mi-ActionCenter"
            text=""
            link="/" />
          <InNavigationItem 
            icon="mi-More"
            text=""
            link="/" />
        </div>
      </div>
    );
  }
}

export default InNavigation;