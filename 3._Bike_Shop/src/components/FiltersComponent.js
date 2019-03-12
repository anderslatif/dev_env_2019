import React, { Component } from 'react'
import FilterBikeTypes from './FilterBikeTypes';

class FiltersComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bikeTypes: false
    }
    this.handlerBikeTypes = this.handlerBikeTypes.bind(this)
  }
  handlerBikeTypes = () => {
    this.setState((prevState) => ({bikeTypes: !prevState.bikeTypes}))
  }
  render(props) {
    let { addFilterTypes } = this.props;
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
            <button>Price</button>
          </div>
        </div>
        {/* filters__component */}
      </div>
    )
  }
}

export default FiltersComponent;