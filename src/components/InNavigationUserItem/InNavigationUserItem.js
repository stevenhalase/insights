import React, { Component } from 'react';
import './InNavigationUserItem.css';
import InAvatar from '../InAvatar/InAvatar';
import InIcon from '../InIcon/InIcon';

class InNavigationUserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  render() {
    return (
      <div className="InNavigationUserItem">
        <InAvatar 
          image={this.props.user.ProfileImage}
          text={`${this.props.user.FirstName} ${this.props.user.LastName}`}
          size={35}
          isLink={true} />
        <div className="InNavigationUserItem-Name">
          <span>{`${this.props.user.FirstName} ${this.props.user.LastName}`}</span>
        </div>
      </div>
    );
  }
}

export default InNavigationUserItem;