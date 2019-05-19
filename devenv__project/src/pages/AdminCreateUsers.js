/* eslint-disable */
import React, { Component } from 'react';
import SidebarComponent from '../components/SidebarComponent';
import AdminCreateUsersTracker from '../components/AdminCreateUsersTracker';
import AdminCreateCredentialsComponent from '../components/AdminCreateCredentialsComponent';
import AdminCreatePersonalComponent from '../components/AdminCreatePersonalComponent';
import AdminCreateRoleComponent from '../components/AdminCreateRoleComponent';

class AdminCreateUsers extends Component {
  constructor(props) {
      super(props)
      this.state = {
        trackerComponentState: true,
        credentialsComponentState: true,
        personalComponentState: false,
        roleComponentState: false,
        finishComponentState: false,
        trackerPercentageState: 0,
        email: "",
        password: "",
        name: "",
        birthdate: "",
        country: "",
        phone: "",
        role: ""
      }
  }

//   setState with the input datas
  getUserDatas = (ev) => {
    let value = ev.target.value;
    let name = ev.target.name;

    this.setState({[name]: value});
  }

// transition register from credentials to personal
  nextStageToPersonal = () => {
      this.setState(() => {
          return {
              credentialsComponentState: false,
              personalComponentState: true,
              trackerPercentageState: 33
          }
      })
  }

//   get user role attribute value
  getUserRoles = (ev) => {
    let role = ev.target.value;
    this.setState({role: role})
  }

//   transition register from personal to role
  nextStageToRole = () => {
      this.setState(() => {
          return {
              personalComponentState: false,
              roleComponentState: true,
              trackerPercentageState: 66
          }
      })
  }

// transition register from role to confirm the new users
  finishStageToConfirm = () => {
    this.setState(() => {
        return {
            finishComponentState: true,
            trackerPercentageState: 99
        }
    })
  }

// submit create a new profile
  submitCreateUsers = () => {
      let { email, password, name, birthdate, country, phone, role } = this.state;
      const userDatas = {
          email:  email,
          password: password,
          name: name,
          birthdate: birthdate,
          country: country,
          phone: phone,
          role: role
      }
      console.log(userDatas)
  }
  render() {
    let {
        trackerComponentState, 
        credentialsComponentState,
        personalComponentState,
        roleComponentState,
        trackerPercentageState
    } = this.state;
    return (
      <div className="admin__create">
            <div className="admin__create--wrapper">
                <SidebarComponent />
                <div className="create__users">
                    <div className="create__users--wrapper">
                        {
                            trackerComponentState
                            &&
                            <AdminCreateUsersTracker
                                credentialsComponentState={credentialsComponentState}
                                personalComponentState={personalComponentState}
                                roleComponentState={roleComponentState}
                                trackerPercentageState={trackerPercentageState}
                            />
                        }
                        {
                            credentialsComponentState
                            &&
                            <AdminCreateCredentialsComponent
                                credentials={this.state}
                                getUserDatas={this.getUserDatas}
                                nextStageToPersonal={this.nextStageToPersonal}
                            />
                        }
                        {
                            personalComponentState
                            &&
                            <AdminCreatePersonalComponent
                                getUserDatas={this.getUserDatas}
                                nextStageToRole={this.nextStageToRole}
                            />
                        }
                        {
                            roleComponentState
                            &&
                            <AdminCreateRoleComponent
                                getUserRoles={this.getUserRoles}
                                finishStageToConfirm={this.finishStageToConfirm}
                                finishComponentState={this.state.finishComponentState}
                                submitCreateUsers={this.submitCreateUsers}
                            />
                        }
                    </div>
                </div>
                {/* admin__create */}
            </div>
      </div>
    )
  }
}

export default AdminCreateUsers;