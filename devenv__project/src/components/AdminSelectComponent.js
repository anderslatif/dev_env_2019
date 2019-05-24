/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AdminSelectComponent extends Component {
  render() {
    return (
      <div className="admin__select">
        <div className="admin__select--wrapper">
            <h2>Admin Page</h2>
            <div className="select__wrapper">
                <Link to="/admin/create-users">
                    <svg>
                        <use href="./image/sprite.svg#icon-user-plus"></use>
                    </svg>
                    <p>Create users</p>
                </Link>
                <Link to="/admin/view-orders">
                    <svg>
                        <use href="./image/sprite.svg#icon-eye"></use>
                    </svg>
                    <p>View orders</p>
                </Link>
            </div>
            {/* admin__select         */}
        </div>
      </div>
    )
  }
}

export default AdminSelectComponent;