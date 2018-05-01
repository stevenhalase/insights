import React, { Component } from 'react';
import './InAppLink.css';
import InIcon from '../InIcon/InIcon';

class InAppLink extends Component {
  render() {
    return (
      <div className="InAppLink">
        <InIcon 
          icon={this.props.icon}
          color="#2c2c2c" />
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default InAppLink;