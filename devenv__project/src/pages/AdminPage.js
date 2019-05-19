import React, { Component } from 'react';
import SidebarComponent from '../components/SidebarComponent';
import AdminSelectComponent from '../components/AdminSelectComponent';

class AdminPage extends Component {
  constructor(props) {
      super(props)
      this.state = {
          adminSelectComponentState: true
      }
  }
  render() {
    let { adminSelectComponentState } = this.state;
    return (
      <div className="admin__page">
        <div className="admin__page--wrapper">
            <SidebarComponent />
            {
                adminSelectComponentState
                &&
                <AdminSelectComponent />
            }
        </div>
      </div>
    )
  }
}

export default AdminPage;