import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AdminSelectComponent extends Component {
  render() {
    return (
      <div className="admin__select">
        <div className="admin__select--wrapper">
            <h2>Admin Page</h2>
            <div class="select__wrapper">
                <Link to="/admin/create-profiles">
                    <svg>
                        <use href="./image/sprite.svg#icon-user-plus"></use>
                    </svg>
                    <p>Create users</p>
                </Link>
                <Link to="/admin/view-products">
                    <svg>
                        <use href="./image/sprite.svg#icon-eye"></use>
                    </svg>
                    <p>View products</p>
                </Link>
            </div>
            {/* admin__select         */}
        </div>
      </div>
    )
  }
}

export default AdminSelectComponent;