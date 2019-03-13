import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import AdminHeader from '../components/AdminHeader';

// const AdminLinks = () => (
//     <div className="admin__links">
//         <NavLink to="/products">Products</NavLink>
//     </div>
// );

// const ProfileAdmin = () => (
//     <div className="profile__admin">
//         <div className="profile__admin--image">
//             <img src="./image/product__image.jpg" alt="user__image"/>
//         </div>
//         <div className="profile__admin--username">
//             <NavLink to="/admin">Cosmin Burlacu</NavLink>
//         </div>
//     </div>
// );

class PageAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminLinkState: false,
            adminLinkStateSelected: "Admin",
            searchInputState: false
        }
        this.toggleAdminLinks = this.toggleAdminLinks.bind(this)
        this.toggleSearchInput = this.toggleSearchInput.bind(this)
    }

    toggleAdminLinks = () => {
        this.setState((prevState) => ({adminLinkState: !prevState.adminLinkState}))
    }

    toggleSearchInput = () => {
        this.setState((prevState) => ({searchInputState: !prevState.searchInputState}))
    }

    // componentDidMount() {
    //     console.log(match.params)
    // }
    render() {
        return (
        <div className="page__admin">
            <AdminHeader
                adminLinkState={this.state.adminLinkState}
                adminLinkStateSelected={this.state.adminLinkStateSelected}
                searchInputState={this.state.searchInputState}
                toggleAdminLinks={this.toggleAdminLinks}
                toggleSearchInput={this.toggleSearchInput}
            >
            </AdminHeader>
            {/* <div className="header__component">
                <div className="header__component--left">
                    <div className="header__component--left--logos">
                        <NavLink to="/admin">Biker</NavLink>
                    </div>
                    <div className="header__component--left--pageswitcher">
                        <button 
                            onClick={this.toggleAdminLinks} 
                            className={this.state.adminLinkState ? "adminActiveLinks" : "adminInactiveLinks"}
                        >
                            {this.state.adminLinkStateSelected}
                            <svg>
                                <use href="./image/sprite.svg#icon-chevron-small-down"></use>
                            </svg>
                        </button>
                        {
                            this.state.adminLinkState
                            &&
                            <AdminLinks></AdminLinks>
                        }
                    </div>  
                </div>
                <div className="header__component--right">
                    <div className="header__component--right--search">
                        {this.state.searchInputState && <input type="text" placeholder="search inputs"/>}
                        <svg onClick={this.toggleSearchInput}>
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
                    <NavLink to={`/admin/dashboard`}>Dashboard</NavLink>
                    <NavLink to="/admin/entries">Entries</NavLink>
                </div>
                <div className="subheader__component--extra"></div>
            </div> */}
            {/* PageAdmin */}
        </div>
        )
    }
}

export default PageAdmin;