import React, { Component } from 'react'

class AdminFilters extends Component {
  render(props) {
    return (
      <div className="admin__filters">
        <div className="admin__filters--search">
            <svg onClick={this.props.toggleAdminEntriesSearch}>
                <use href="./image/sprite.svg#icon-search"></use>
            </svg>
            {
                this.props.adminEntriesSearch
                &&
                <input type="text" placeholder="search entries" onChange={this.props.getAdminEntriesSearchValue}/>
            }
        </div>
        <div className="admin__filters--sorting">
            <select>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
        {/* AdminFilters */}
      </div>
    )
  }
}

export default AdminFilters;