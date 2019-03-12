import React, { Component } from 'react'
import IndividualProductItems from './IndividualProductItems';

class ProductsComponent extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     cartProducts: []
  //   }
  //   this.addProductsCarts = this.addProductsCarts.bind(this);
  // }
  // addProductsCarts = (ev) => {
  //   console.log("addProductsCarts");
  //     this.state.cartProducts.push(ev.target.getAttribute("data-id"))
  // }
  render(props) {
    let { products, addCartObject } = this.props;
    return (
      <div className="products__component">
        <div className="products__component--wrapper">
            {
                products.map((product) => {
                    return <IndividualProductItems 
                                key={product.productId}
                                data-id={product.productId}
                                product={product}
                                views={this.props.views}
                                addProductsCarts={this.props.addProductsCarts}
                                addCartObject={addCartObject}
                                // cartProducts={this.props.cartProducts}
                           />
                })
            }
        </div>
        {/* ProductsComponent */}
      </div>
    )
  }
}

export default ProductsComponent;