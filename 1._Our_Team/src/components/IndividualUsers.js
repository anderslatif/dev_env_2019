import React, { Component } from 'react'
import AnimationLoadingDatas from './AnimationLoadingDatas';
import users from "../usersDatas";
import AllUsersIndividualDatas from './AllUsersIndividualDatas';

class IndividualUsers extends Component {
  constructor(props) {
      super(props)
      this.state = {
          animationState: false,
          users
      }
  }
  componentDidMount() {
    setInterval(() => {
        this.setState((prevState) => {
            return {
                animationState: !prevState.animationState
            }
        })
    }, 1400)
  }
  render(props) {
    return (
      <div className={this.props.individualUsersSizes ? "individual__users--maximized" : "individual__users"}>
        <div className="individual__users--header">
              <div className="individual__users--header--title">
                <p>Datas Controller</p>
              </div>
              <div className="individual__users--header--navigations">
                <svg>
                  <use href="./image/sprite.svg#icon-minus"></use>
                </svg>
                <svg onClick={this.props.maximizeIndividualUsers}>
                  <use href="./image/sprite.svg#icon-maximize"></use>
                </svg>
                <svg>
                  <use onClick={this.props.closeSelectedUsers} href="./image/sprite.svg#icon-cross"></use>
                </svg>
              </div>
            </div>
            <div className={this.props.individualUsersSizes ? "individual__users--maximized--content" : "individual__users--content"}>
            {
                this.state.users.map((user, index) => {
                    if(user.id === this.props.selectedUsers) {
                        return(
                            <AllUsersIndividualDatas key={index} user={user}></AllUsersIndividualDatas>
                        );
                    }
                })
            }
            </div>    
        {/* IndividualUsers */}
      </div>
    )
  }
}

export default IndividualUsers;