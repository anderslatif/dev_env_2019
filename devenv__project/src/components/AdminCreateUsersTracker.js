/* eslint-disable */
import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class AdminCreateUsersTracker extends Component {
  render(props) {
    let {
        credentialsComponentState,
        personalComponentState,
        roleComponentState,
        trackerPercentageState
    } = this.props;
    return (
      <div className="adminCreateUsersTracker">
        <div className="adminCreateUsersTracker--wrapper">
            <h2>Creation Progress</h2>
            <div className="progress__utilities">
            <CircularProgressbar
                value={trackerPercentageState}
                className="progress__utilities--progress"
                text={
                <tspan>{trackerPercentageState}%</tspan>
                }
            />
            <div className="progress__utilities--stage">
                <p className={credentialsComponentState ? "credentialStage--active" : "credentialStage"}>
                    <svg>
                        <use href="./image/sprite.svg#icon-profile"></use>
                    </svg>
                    Credentials
                </p>
                <p className={personalComponentState ? "personalStage--active" : "personalStage"}>
                    <svg>
                        <use href="./image/sprite.svg#icon-user"></use>
                    </svg>
                    Personal
                </p>
                <p className={roleComponentState ? "roleStage--active" : "roleStage"}>
                    <svg>
                        <use href="./image/sprite.svg#icon-books"></use>
                    </svg>
                    Role
                </p>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AdminCreateUsersTracker;