import React, { Component } from 'react'
import FilterBikeTypes from './FilterBikeTypes';
import FilterBikePrice from "./FilterBikePrice";

class FiltersComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bikeTypes: false,
      bikePrices: false,
    }
    this.handlerBikeTypes = this.handlerBikeTypes.bind(this)
    this.handleBikesPrice = this.handleBikesPrice.bind(this)
  }
  
  handlerBikeTypes = () => {
    this.setState((prevState) => ({bikeTypes: !prevState.bikeTypes}))
  }

  handleBikesPrice = () => {
    this.setState((prevState) => ({bikePrices: !prevState.bikePrices}))
  }
  render(props) {
    let { addFilterTypes, setPriceRange, setSortMainProducts } = this.props;
    return (
      <div className="filters__component">
        <div className="filters__component--wrapper">
          <div className="filters__wrapper">
            <button>Dates</button>
          </div>
          <div className="filters__wrapper">
            <button onClick={this.handlerBikeTypes} className={this.state.bikeTypes ? "activeFilterTypes" : "inactiveFilterTypes"}>Bike type</button>
            {this.state.bikeTypes && <FilterBikeTypes addFilterTypes={addFilterTypes}/>}
          </div>
          <div className="filters__wrapper">
            <button onClick={this.handleBikesPrice}>Price</button>
            {this.state.bikePrices && <FilterBikePrice setSortMainProducts={setSortMainProducts}></FilterBikePrice>}
          </div>
        </div>
        {/* filters__component */}
      </div>
    )
  }
}

export default FiltersComponent;