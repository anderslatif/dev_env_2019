import React, { Component } from 'react'
import AdminHeader from './AdminHeader';
import AdminFilters from './AdminFilters';
import AdminPuchases from './AdminPuchases';

const EntriesObjects = ({toggleAdminEntriesSearch, adminEntriesSearch}) => (
  <div className="entries__wrapper">
    <AdminFilters 
      toggleAdminEntriesSearch={toggleAdminEntriesSearch}
      adminEntriesSearch={adminEntriesSearch}
    >
    </AdminFilters>
    <AdminPuchases></AdminPuchases>
    {/* EntriesObjects */}
  </div>
);

class SubpageEntries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adminEntriesSearchValue: "",
      adminEntriesSearch: false
    }
    this.toggleAdminEntriesSearch = this.toggleAdminEntriesSearch.bind(this)
  }

  toggleAdminEntriesSearch = () => {
    this.setState((prevState) => ({adminEntriesSearch: !prevState.adminEntriesSearch}))
  }
  render() {
    return (
      <div className="subpage__entries">
        <AdminHeader></AdminHeader>
        <EntriesObjects 
          toggleAdminEntriesSearch={this.toggleAdminEntriesSearch}
          adminEntriesSearch={this.state.adminEntriesSearch}
        >
        </EntriesObjects>
        {/* SubpageEntries */}
      </div>
    )
  }
}

export default SubpageEntries;