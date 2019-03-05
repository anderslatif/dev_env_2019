import React, { Component } from 'react'
import CartItemsComponent from './CartItemsComponent';

class CartsComponent extends Component {
  render(props) {
    let { closeCart } = this.props;
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
                <CartItemsComponent/>
            </div>
            <div className="cart__checkout">
                <div className="product__subtotal">
                    <h2>Sub Total</h2>
                    <p>$145.00</p>
                </div>
                <div className="product__checkout">
                    <button>Go to checkout</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default CartsComponent;