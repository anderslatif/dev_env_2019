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
      value: 1,
      name: "Admin",
      id: 1
    },
    {
      value: 2,
      name: "HR",
      id: 2
    },
    {
      value: 3,
      name: "Sales",
      id: 3
    },
    {
      value: 4,
      name: "Gate officer",
      id: 4
    },
    {
      value: 5,
      name: "Warehouse loader",
      id: 5
    },
    {
      value: 6,
      name: "Warehouse dispatcher",
      id: 6
    },
    {
      value: 7,
      name: "Auditor",
      id: 7
    }
  ];

class AdminCreateRoleComponent extends Component {
  render(props) {
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
      </div>
    )
  }
}

export default AdminCreateRoleComponent;