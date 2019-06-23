/*eslint-disable*/
import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';

class SidebarComponent extends Component {
  constructor(props) {
    super(props)
  }
  signOutUsers = () => {
    axios.get("https://localhost:8000/logout", {})
         .then(response => {
           console.log("response: ", response.status)
           if(response.status === 200) {
            this.props.history.push('/login')
           }
          })
         .catch(error => console.log("error: ", error))
  }
  render(props) {
    return (
      <div className="sidebar__component">
        <div className="sidebar__component--wrapper">
            <div className="sidebar__header">
                <Link to="/admin" className="sidebar__header--logos">ToxicApp</Link>
                <div className="sidebar__header--userrelated">
                    <Link to="/admin" className="sidebar__header--userrelated--usertype"></Link>
                    <div className="userStateStatus"></div>
                    <button className="signOutButton" onClick={this.signOutUsers}>SignOut</button>
                </div>
            </div>
            <div className="sidebar__navigation">
                {
                  this.props.activePageStatus === "HR"
                  ?
                  <NavLink to="/hr">View Users</NavLink>
                  :
                  <div>
                    <NavLink to="/admin/create-users">Create Users</NavLink>
                    <NavLink to="/admin/view-users">View Users</NavLink>
                    <NavLink to="/admin/view-orders">View Orders</NavLink>
                    <NavLink to="/admin/create-site">Create Site</NavLink>
                  </div>
                }
            </div>
        </div>
      </div>
    )
  }
}

export default SidebarComponent;