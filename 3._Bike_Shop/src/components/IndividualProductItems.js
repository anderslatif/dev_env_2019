import React, { Component } from 'react'
import {Link} from "react-router-dom";
import HoverProductsComponent from "./HoverProductComponent";

class IndividualProductItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverProductState: false
    }
    this.hoverProductIndividual = this.hoverProductIndividual.bind(this)
    this.hoverProductExits = this.hoverProductExits.bind(this)
  }

  hoverProductIndividual = () => {
    this.setState((prevState) => ({
      hoverProductState: !prevState.hoverProductIndividual
    }))
  }

  hoverProductExits = () => {
    this.setState({hoverProductState: false})
  }
  render(props) {
    let {product} = this.props;
    return (
      <div className="product__individual" 
          onMouseEnter={this.hoverProductIndividual}
          onMouseLeave={this.hoverProductExits}
      >
        {this.state.hoverProductState && <HoverProductsComponent/>}
        <div className="product__division">
            <div className="product__division--image">
              <img src={product.productCover} alt="product__image"/>
            </div>
            <div className="product__division--datas">
              <p>{product.productName}</p>
              <span>${product.productPrice}</span>
            </div>
        </div>
      </div>
    )
  }
}

export default IndividualProductItems;