import React, { Component } from 'react';
import './InIcon.css';

class InIcon extends Component {
  render() {
    let options = {
      icon: this.props.icon || '', 
      size: this.props.size || '',
      color: this.props.color || '#fff'
    };
    return (
      <div className="InIcon">
        <i className={`mi ${options.icon} ${options.size}`} style={{color: options.color}}></i>
      </div>
    );
  }
}

export default InIcon;