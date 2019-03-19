import React, { Component } from "react";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

class FilterBikePrice extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { setPriceRange, setSortMainProducts } = this.props;
        return(
            <div className="filterBikePrice">
                <div className="filterBikePrice--wrapper">
                    <p>Select a price range to filter:</p>
                    <select onChange={setSortMainProducts}>
                        <option value="ascending">Ascending price</option>
                        <option value="descending">Descending price</option>
                    </select>
                    {/* <div className="filterBikePrice--wrapper--input">
                        <input type="number" placeholder="min price" name="minPrice" onChange={setPriceRange}/>
                        <input type="number" placeholder="max price" name="maxPrice" onChange={setPriceRange}/>
                    </div> */}
                </div>
                {/* FilterBikePrice */}
            </div>
        );
    }
}

export default FilterBikePrice;