import React, { Component } from 'react';
import './InAppLink.css';

class InAppLink extends Component {
  render() {
    return (
      <div className="InAppLink">
        <div 
          className="InAppLink-Wrapper" 
          style={{ backgroundImage: `url(${this.props.backgroundimage})` }}></div>
        <span className="InAppLink-Text">{this.props.text}</span>
      </div>
    );
  }
}

export default InAppLink;