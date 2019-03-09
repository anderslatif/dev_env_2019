import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

class ProductViews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaderState: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
       this.setState((prevState) => ({loaderState: !prevState.loaderState}))  
    }, 3200)
  }
  render(props) {
    return (
      <div className="product__views">
        <div className="product__views--wrapper">
            <svg className="close__views" onClick={this.props.closeViews}>
                <use href="./image/sprite.svg#icon-cross"></use>
            </svg>
            {
              this.state.loaderState 
              &&
              <div className="loader__products">
                <Loader type="ThreeDots" color="#somecolor" height={32} width={32} />
              </div>
            }
            <div className="inner__contentWrapper">
              <div className="inner__contentWrapper--image"></div>
              <div className="inner__contentWrapper--controllers"></div>
            </div>
        </div>
        {/* ProductViews */}
      </div>
    )
  }
}

export default ProductViews;