import React, { Component } from 'react'
import AdminHeader from './AdminHeader';
import moment from "moment";

const BudgetDetails = () => (
  <div className="budget__details">
    <div className="budget__details--header">
      <h2>Budget Details</h2>
    </div>
    <div className="budget__details--content">
      <div className="budgetContent__information">
        <h2>Global Datas</h2>
        <svg>
          <use href="./image/sprite.svg#icon-safe"></use>
        </svg>
        <p>You are currently accessing the <span>total purchase value</span></p>
      </div>
      <div className="budgetContent__details">
        <div className="budgetContent__details--textinformation">
          <div className="data__header">
            <h2 className="data__header--description">Description</h2>
            <h2 className="data__header--amount">Amount</h2>
          </div>
          <div className="data__content"></div>
        </div>
        <div className="budgetContent__details--numericinformation">
          <div></div>
          <div className="data__total">
            <div className="data__total--due">
              <p>Total</p>
              <span>Due to {moment().format("DD MMM YY")}</span>
            </div>
            <div className="data__total--numeric"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

class SubpageDashboard extends Component {
  render() {
    return (
      <div className="subpage__dashboard">
        <AdminHeader></AdminHeader>
        <BudgetDetails></BudgetDetails>
        {/* <p style={{marginTop:"32rem"}}>SubpageDashboard</p> */}
      </div>
    )
  }
}

export default SubpageDashboard;