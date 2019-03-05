import React, { Component } from 'react'
import IndividualProductItems from './IndividualProductItems';

class ProductsComponent extends Component {
  render(props) {
    let { products } = this.props;
    return (
      <div className="products__component">
        <div className="products__component--wrapper">
            {
                products.map((product) => {
                    return <IndividualProductItems 
                                key={ product.productId }
                                data-id={ product.productId }
                                product={ product }
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