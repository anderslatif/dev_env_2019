import React, { Component } from 'react'

class CartItemsComponent extends Component {
  render(props) {
    let { productName, productPrice, productCover, productId } = this.props.product;
    return (
      <div className="cart__items">
        <div className="cart__items--wrapper">
            <div className="product__image">
                <img src={productCover} alt="product__image"/>
            </div>
            <div className="product__info-interaction">
                <div className="product__title">
                    <h2>{productName}</h2>
                </div>
                <div className="product__quantitativeDatas">
                    <div className="product__price">
                        <p>{productPrice}</p>
                    </div>
                    <div className="product__quantity">
                        <svg>
                            <use href="./image/sprite.svg#icon-minus"></use>
                        </svg>
                        <input type="number" value="0" onChange={() => {console.log("tests")}}/>
                        <svg>
                            <use href="./image/sprite.svg#icon-plus"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="product__remove">
                <svg data-id={productId} onClick={this.props.removeProductsCarts}>
                    <use href="./image/sprite.svg#icon-cross"></use>
                </svg>
            </div>
        </div>
        {/* CartItemsComponent */}
      </div>
    )
  }
}

export default CartItemsComponent;