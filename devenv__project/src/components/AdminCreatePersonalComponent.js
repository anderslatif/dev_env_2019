/* eslint-disable */
import React, { Component } from 'react';

class AdminCreatePersonalComponent extends Component {
  render(props) {
    // let { getUserDatas } = this.props;
    return (
      <div className="adminCreatePersonalComponent">
        <div className="adminCreatePersonalComponent--wrapper">
            <h2>Personal registration</h2>

            <div className="personal__registration">
                <input type="text" placeholder="User Name" name="name" onChange={this.props.getUserDatas} />
                <input type="text" placeholder="User BirthDate" name="birthdate" onChange={this.props.getUserDatas} />
                <input type="text" placeholder="Country" name="country" onChange={this.props.getUserDatas} />
                <input type="number" placeholder="Phone Number" name="phone" onChange={this.props.getUserDatas} />
            </div>
            <div className="next__stage">
                <button className="next__stage--button" onClick={this.props.nextStageToRole}>Next Stage</button>
            </div>
        </div>
      </div>
    )
  }
}

export default AdminCreatePersonalComponent;