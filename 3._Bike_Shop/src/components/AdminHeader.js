import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

const AdminLinks = () => (
    <div className="admin__links">
        <NavLink to="/products">Products</NavLink>
    </div>
);

const ProfileAdmin = () => (
    <div className="profile__admin">
        <div className="profile__admin--image">
            <img src="./image/product__image.jpg" alt="user__image"/>
        </div>
        <div className="profile__admin--username">
            <NavLink to="/admin">Cosmin Burlacu</NavLink>
        </div>
    </div>
);

class AdminHeader extends Component {
  render(props) {
    // let { adminLinkState, adminLinkStateSelected, searchInputState, toggleAdminLinks, toggleSearchInput } = this.props;
    return (
      <div>
        <div className="header__component">
                <div className="header__component--left">
                    <div className="header__component--left--logos">
                        <NavLink to="/admin">Biker</NavLink>
                    </div>
                    <div className="header__component--left--pageswitcher">
                        <button 
                            onClick={this.props.toggleAdminLinks} 
                            className={this.props.adminLinkState ? "adminActiveLinks" : "adminInactiveLinks"}
                        >
                            {this.props.adminLinkStateSelected}
                            <svg>
                                <use href="./image/sprite.svg#icon-chevron-small-down"></use>
                            </svg>
                        </button>
                        {
                            this.props.adminLinkState
                            &&
                            <AdminLinks></AdminLinks>
                        }
                    </div>  
                </div>
                <div className="header__component--right">
                    <div className="header__component--right--search">
                        {this.props.searchInputState && <input type="text" placeholder="search inputs"/>}
                        <svg onClick={this.props.toggleSearchInput}>
                            <use href="./image/sprite.svg#icon-search"></use>
                        </svg>
                    </div>
                    <div className="header__component--right--users">
                        <ProfileAdmin></ProfileAdmin>
                    </div>
                </div>
            </div>
            <div className="subheader__component">
                <div className="subheader__component--navigation">
                    <NavLink to="/admin/dashboard" activeClassName="active__subnavigation">Dashboard</NavLink>
                    <NavLink to="/admin/entries" activeClassName="active__subnavigation">Entries</NavLink>
                </div>
                <div className="subheader__component--extra"></div>
            </div>
      </div>
    )
  }
}

export default AdminHeader;