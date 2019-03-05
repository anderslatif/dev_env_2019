import React, { Component } from 'react'

class SearchComponent extends Component {
  render(props) {
    // let { search } = this.props;
    return (
      <div className="search__component">
        <input type="text" placeholder="search products" onChange={ this.props.search }/>
        {/* SearchComponent */}
      </div>
    )
  }
}

export default SearchComponent;