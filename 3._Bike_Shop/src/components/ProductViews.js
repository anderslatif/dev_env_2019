import React, { Component } from 'react'

class ProductViews extends Component {
  render(props) {
    return (
      <div className="product__views">
        <div className="product__views--wrapper">
            <svg className="close__views" onClick={this.props.closeViews}>
                <use href="./image/sprite.svg#icon-cross"></use>
            </svg>
        </div>
        {/* ProductViews */}
      </div>
    )
  }
}

export default ProductViews;