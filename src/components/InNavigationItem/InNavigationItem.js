import React, { Component } from 'react';
import './InNavigationItem.css';
import InIcon from '../InIcon/InIcon';

class InNavigationItem extends Component {
  render() {
    return (
      <div className="InNavigationItem">
        <InIcon 
          icon={this.props.icon}
          color="#fff" />
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default InNavigationItem;