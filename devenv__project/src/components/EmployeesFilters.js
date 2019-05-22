/*eslint-disable*/
import React, { Component } from "react";

class EmployeesFilters extends Component {
    render() {
        return(
            <div className="employees__filters">
                <div className="category__title">
                    <h2>Users Lists</h2>
                </div>
                <div className="filters__input">
                    <div className="filters__input--block">
                        <div className="filters__sortby">
                            <p>Sort by:</p>
                            <select>
                                <option value="name">Name</option>
                                <option value="role">Role</option>
                            </select>
                        </div>
                        <div className="filters__search">
                            <input type="text" placeholder="Search Users" />
                        </div>
                    </div>
                </div>
                {/* EmployeesFilters */}
            </div>
        );
    }
}

export default EmployeesFilters;