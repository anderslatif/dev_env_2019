import React, { Component } from 'react'
import {Link} from "react-router-dom";

class IndividualProductItems extends Component {
  render(props) {
    let { product } = this.props;
    // let dot = productPrice.substring(0, productPrice.length - 2);
    return (
      <div className="product__individual">
      {/* <Link to="/"> */}
      <a href={`/products/${product.productId}`}>
        <div className="product__division">
            <div className="product__division--image">
              <img src={product.productCover} alt="product__image"/>
            </div>
            <div className="product__division--datas">
              <p>{ product.productName }</p>
              <span>${ product.productPrice }</span>
            </div>
        </div>
        </a>
      {/* </Link> */}
        {/* IndividualProductItems */}
      </div>
    )
  }
}

export default IndividualProductItems;