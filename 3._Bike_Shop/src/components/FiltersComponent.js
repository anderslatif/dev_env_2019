import React, { Component } from 'react'

class FiltersComponent extends Component {
  render() {
    return (
      <div className="filters__component" style={{
          position:"fixed",
          width:"45rem",
          height:"100vh",
          backgroundColor:"lightgrey",
          top:0,
          left:0,
          zIndex:9
      }}>
        filters__component
      </div>
    )
  }
}

export default FiltersComponent;