import React, { Component } from 'react'
import AdminPurchasesElement from './AdminPurchasesElement';

class AdminPuchases extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    let sortedEntries = this.props.adminProducts.sort((a, b) => {
      if(this.props.sortType === "ascending") {
        return a.price - b.price;
      } else if(this.props.sortType === "descending") {
        return b.price - a.price;
      }
    });
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
                sortedEntries.map((entry, index) => {
                    return <AdminPurchasesElement entry={entry} key={index}></AdminPurchasesElement>
                })
            }
        </div>
        {/* AdminPuchases */}
      </div>
    )
  }
}

export default AdminPuchases;