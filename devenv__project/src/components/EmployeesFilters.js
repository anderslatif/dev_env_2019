/*eslint-disable*/
import React, { Component } from "react";

class EmployeesFilters extends Component {
    constructor(props) {
        super(props)
    }
    render(props) {
        let { getSearchValue } = this.props;
        return(
            <div className="employees__filters">
                <div className="category__title">
                    <h2>Users Lists</h2>
                </div>
                <div className="filters__input">
                    <div className="filters__input--block">
                        <div className="filters__sortby">
                            <p>Sort by:</p>
                            <select name="sortBy" onChange={getSearchValue}>
                                <option value="name">Name</option>
                                <option value="role">Role</option>
                            </select>
                        </div>
                        <div className="filters__search">
                            <input type="text" placeholder="Search Users" name="searchInputValue" onChange={getSearchValue} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeesFilters;