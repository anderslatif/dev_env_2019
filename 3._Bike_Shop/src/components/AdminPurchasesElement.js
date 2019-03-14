import React, { Component } from 'react'

class AdminPurchasesElement extends Component {
  render(props) {
      let { entry } = this.props;
    return (
      <div className="adminPurchasesElement">
        <div>{entry.date}</div>
        <div>{entry.staff}</div>
        <div>{entry.customer}</div>
        <div>{entry.product}</div>
        <div>{entry.price}</div>
            {/* AdminPurchasesElement */}
      </div>
    )
  }
}

export default AdminPurchasesElement;