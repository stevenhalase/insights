import React, { Component } from 'react';
import './InAvatar.css';

class InAvatar extends Component {
  render() {
    if (this.props.image) {
      return (
        <div className="InAvatar">
          <img 
            className="InAvatar-Image"
            src={this.props.image} 
            width={this.props.size} 
            height={this.props.size} />
        </div>
      );
    } else {
      let abrv = this.props.text.match(/\b(\w)/g).join('');
      return (
        <div className="InAvatar">
          <div
            className="InAvatar-Text" 
            style={{ width: this.props.size, height: this.props.size }}>
            <span>{abrv}</span>
          </div>
        </div>
      );
    }
  }
}

export default InAvatar;