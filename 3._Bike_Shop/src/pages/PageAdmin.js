import React, { Component } from 'react'
import AdminHeader from '../components/AdminHeader';

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
            {/* PageAdmin */}
        </div>
        )
    }
}

export default PageAdmin;