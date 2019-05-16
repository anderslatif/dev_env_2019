/* eslint-disable */
import React, { Component } from 'react';

class AdminCreateCredentialsComponent extends Component {
  render(props) {
    // let { getUserDatas } = this.props;
    return (
      <div className="adminCreateCredentialsComponent">
        <div className="adminCreateCredentialsComponent--wrapper">
            <h2>Credentials registration</h2>

            <div className="credentials__registration">
                <input type="text" placeholder="User Email" name="email" onChange={this.props.getUserDatas} />
                <input type="password" placeholder="User Password" name="password" onChange={this.props.getUserDatas} />
            </div>
            <div className="next__stage">
                <button className="next__stage--button" onClick={this.props.nextStageToPersonal}>Next Stage</button>
            </div>
        </div>
        {/* AdminCreateCredentialsComponent */}
      </div>
    )
  }
}

export default AdminCreateCredentialsComponent;