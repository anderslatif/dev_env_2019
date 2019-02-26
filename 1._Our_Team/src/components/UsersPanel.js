import React, { Component } from 'react'
import users from "../usersDatas";
import IndividualUserTemplate from './IndividualUserTemplate';
class UsersPanel extends Component {
  render(props) {
    return (
      <div className="users__panel">
            <div className="users__panel--header">
              <div className="users__panel--header--title">
                <p>Users Controller</p>
              </div>
              <div className="users__panel--header--navigations">
                <svg>
                  <use href="./image/sprite.svg#icon-minus"></use>
                </svg>
                <svg>
                  <use onClick={this.props.closeUsersPanel} href="./image/sprite.svg#icon-cross"></use>
                </svg>
              </div>
            </div>
            <div className="users__panel--content">
                {
                    users.map((items, index) => {
                        return(
                            <IndividualUserTemplate handleSelectedUsers={this.props.handleSelectedUsers} key={index} items={items}></IndividualUserTemplate>
                        );
                    })
                }
            </div>    
        {/* UsersPanel */}
      </div>
    )
  }
}

export default UsersPanel;