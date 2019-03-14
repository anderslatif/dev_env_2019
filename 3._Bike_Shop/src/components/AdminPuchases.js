import React, { Component } from 'react'
import AdminPurchasesElement from './AdminPurchasesElement';

class AdminPuchases extends Component {
  render(props) {
    return (
      <div className="admin__purchases">
        <div className="admin__purchases--header">
            <div className="admin__purchases--header--element">Date</div>
            <div className="admin__purchases--header--element">Member</div>
            <div className="admin__purchases--header--element">Customer</div>
            <div className="admin__purchases--header--element">Product</div>
            <div className="admin__purchases--header--element">Price</div>
        </div>
        <div className="admin__purchases--content">
            {
                this.props.adminProducts.map((entry) => {
                    return <AdminPurchasesElement entry={entry}></AdminPurchasesElement>
                })
            }
        </div>
        {/* AdminPuchases */}
      </div>
    )
  }
}

export default AdminPuchases;