import React, { Component } from 'react'
import AdminHeader from './AdminHeader';
import moment from "moment";

const adminProducts = [
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber1",
    customer:"Customer member",
    product:"product a",
    price:441
  },
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber2",
    customer:"Customer member",
    product:"product b",
    price:442
  },
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber3",
    customer:"Customer member",
    product:"product c",
    price:443
  },
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber4",
    customer:"Customer member",
    product:"product d",
    price:444
  },
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber5",
    customer:"Customer member",
    product:"product e",
    price:445
  }
];

let total = 0;
let priceWithPercentage = 0;

const BudgetDetails = ({ purchases, calculateTotal }) => (
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
          <div className="data__content">
            <div className="data__content--numberTotalPurchases">
              <p>Total number of sells</p>
              <p>{
                purchases.map((purchase, index) => {
                  total+= Number(purchase.price)
                })
              }{total}</p>
            </div>
            <div className="data__content--vatPercentage">
              <p>VAT Taxes 25%</p>
              <span>-{ 25 / 100 * total }</span>
            </div>
          </div>
        </div>
        <div className="budgetContent__details--numericinformation">
          <div></div>
          <div className="data__total">
            <div className="data__total--due">
              <p>Total</p>
              <span>Due to {moment().format("DD MMM YY")}</span>
            </div>
            <div className="data__total--numeric">
              <span>$ { total - (25 / 100 * total) }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

class SubpageDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      purchases: adminProducts
    }
  }
  componentDidMount() {
    let total = 0;
    this.state.purchases.map((purchase, index) => {
      return console.log(total+=purchase.price, index)
    })

    priceWithPercentage = 25 / 100 * total;
  }

  // calculateTotal = () => {
  //   let total = 0;
  //   this.state.purchases.map((purchase, index) => {
  //     return total+=purchase.price
  //   })
  //   return total;
  // }
  render() {
    return (
      <div className="subpage__dashboard">
        <AdminHeader></AdminHeader>
        <BudgetDetails purchases={this.state.purchases}></BudgetDetails>
        {/* <p style={{marginTop:"32rem"}}>SubpageDashboard</p> */}
      </div>
    )
  }
}

export default SubpageDashboard;