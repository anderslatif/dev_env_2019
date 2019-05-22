/* eslint-disable */
import React, { Component } from 'react';
import {
    HR, 
    SALES, 
    GATE_OFFICER,
    WAREHOUSE_LOADER,
    WAREHOUSE_DISPATCHER,
    AUDITOR
  } from "../externalDatas";
  
  const userTypes = [
    {
      value: HR,
      name: "HR"
    },
    {
      value: SALES,
      name: "Sales"
    },
    {
      value: GATE_OFFICER,
      name: "Gate officer"
    },
    {
      value: WAREHOUSE_LOADER,
      name: "Warehouse loader"
    },
    {
      value: WAREHOUSE_DISPATCHER,
      name: "Warehouse dispatcher"
    },
    {
      value: AUDITOR,
      name: "Auditor"
    }
  ];

class AdminCreateRoleComponent extends Component {
  render(props) {
    // let { getUserDatas } = this.props;
    return (
      <div className="adminCreateRoleComponent">
        <div className="adminCreateRoleComponent--wrapper">
            <h2>Role registration</h2>

            <div className="role__registration">
                <select onChange={this.props.getUserRoles}>
                    {
                        userTypes.map((usertype, index) => {
                            return <option value={usertype.value} key={index}>{usertype.name}</option>
                        })
                    }
                </select>
            </div>
            <div className="finish__stage">
                <button className="finish__stage--button" onClick={this.props.finishStageToConfirm}>Finish Stage</button>
            </div>
            {
                this.props.finishComponentState
                &&
                <div className="confirmFinishProfile">
                    <h2>Are you sure you want to create the new account?</h2>
                    <div className="confirmFinishProfile--buttons">
                        <button className="reject__creation">Reject</button>
                        <button className="accept__creation" onClick={this.props.submitCreateUsers}>Accept</button>
                    </div>
                </div>
            }
        </div>
        {/* AdminCreatePersonalComponent */}
      </div>
    )
  }
}

export default AdminCreateRoleComponent;