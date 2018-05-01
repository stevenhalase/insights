import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './InNavigationItem.css';
import InIcon from '../InIcon/InIcon';

class InNavigationItem extends Component {
  render() {
    return (
      <div className="InNavigationItem"
        onClick={() => { this.props.history.push(this.props.link) }}>
        {this.props.icon ?
          <InIcon 
            icon={this.props.icon}
            color="#fff" /> :
          ''}
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default withRouter(InNavigationItem);