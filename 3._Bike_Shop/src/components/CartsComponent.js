import React, { Component } from 'react';
import CartItemsComponent from './CartItemsComponent';
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import PurchaseUsers from './PurchaseUsers';
// import { DateRangePicker } from "react-dates";

const now = moment();
console.log(now.format("D MMM YYYY H mm"));

class CartsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      purchaseUsersState: false
    }
    this.togglePurchaseUsers = this.togglePurchaseUsers.bind(this)
  }
  
  togglePurchaseUsers = () => {
      this.setState((prevState) => ({purchaseUsersState: !prevState.purchaseUsersState}))
  }
  render(props) {
    let { closeCart, carts, products, removeProductsCarts } = this.props;
    let total = 0;
    // let valueTotal;
    return (
      <div className="carts__component">
        {/* CartsComponent */}
        <div className="carts__component--content">
            <div className="cart__header">
                <svg onClick={ closeCart }>
                    <use href="./image/sprite.svg#icon-cross"></use>
                </svg>
                <h2>Your Cart</h2>
            </div>
            <div className="cart__content">
                {
                  carts.map((cartProductIndividual) => {
                    console.log(cartProductIndividual)
                    return products.map((product) => {
                      if(product.productId === cartProductIndividual.id) {
                        return(
                          <CartItemsComponent
                            key={product.productId}
                            product={product}
                            removeProductsCarts={removeProductsCarts}
                          >
                          </CartItemsComponent>
                        );
                      }
                    })
                  })
                }
            </div>
            <div className="cart__checkout">
                <div className="product__subtotal">
                    <h2>Sub Total</h2>
                    {/* <p>$145.00</p> */}
                    <p>
                      {
                        carts.map((cartProductIndividual) => {
                          return products.map((product) => {
                            if(product.productId === cartProductIndividual.id) {
                              total+= Number(product.productPrice)
                              // let numberString = total.toString();
                              // let lengthNumber = numberString.length;
                              // let valueTotal = numberString.substring(0, lengthNumber-2) + "." + numberString.substring(lengthNumber-2)
                              // console.log(total, valueTotal)
                              // return valueTotal
                            }
                          })
                        }) 
                      }
                      ${total}
                    </p>
                </div>
                <div className="product__checkout">
                    <button onClick={this.togglePurchaseUsers}>Go to checkout</button>
                </div>
            </div>
            {
              this.state.purchaseUsersState
              &&
              <PurchaseUsers></PurchaseUsers>
            }
        </div>
      </div>
    )
  }
}

export default CartsComponent;