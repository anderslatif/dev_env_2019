/*eslint-disable*/
import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

class SidebarComponent extends Component {
  render() {
    return (
      <div className="sidebar__component">
        <div className="sidebar__component--wrapper">
            <div className="sidebar__header">
                <Link to="/admin" className="sidebar__header--logos">ToxicApp</Link>
                <div className="sidebar__header--userrelated">
                    <Link to="/admin" className="sidebar__header--userrelated--usertype">Admin</Link>
                    <div className="userStateStatus"></div>
                </div>
            </div>
            <div className="sidebar__navigation">
                <NavLink to="/admin/create-users">Create Profile</NavLink>
                <NavLink to="/admin/view-orders">View Orders</NavLink>
                <NavLink to="/admin/view-users">View Users</NavLink>
                <NavLink to="/admin/create-site">Create Site</NavLink>
            </div>
        </div>
        {/* sidebar__component */}
      </div>
    )
  }
}

export default SidebarComponent;