import React, { Component } from "react";

class FilterBikeTypes extends Component {
    render(props) {
        let { addFilterTypes } = this.props;
        return(
            <div className="filter__content">
            <div className="filter__types">
                <button className="filterType" data-filter="bmx" onClick={addFilterTypes}>BMX</button>
                <button className="filterType" data-filter="track_bike" onClick={addFilterTypes}>Track Bike</button>
                <button className="filterType" data-filter="mountain_bike" onClick={addFilterTypes}>Mountain Bike</button>
                <button className="filterType" data-filter="road_bike" onClick={addFilterTypes}>Road Bike</button>
                <button className="filterType" data-filter="commuting_bike" onClick={addFilterTypes}>Commuting Bike</button>
                {/* FilterBikeTypes */}
            </div>
            </div>
        );
    }
}

export default FilterBikeTypes;