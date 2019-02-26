import React, { Component } from 'react'

class IndividualUserTemplate extends Component {
  render(props) {
    return (
      <div onClick={this.props.handleSelectedUsers} className="individual__usersTemplate" key={this.props.items.id} data-id={this.props.items.id}>
        <div className="individual__usersTemplate--wrapper" data-id={this.props.items.id}>
            <div className="individual__usersTemplate--wrapper--imageHolder" data-id={this.props.items.id}>
                <img src={this.props.items.image} alt="" data-id={this.props.items.id}/>
            </div>
            <div className="individual__usersTemplate--wrapper--namesHolder" data-id={this.props.items.id}>
                <p data-id={this.props.items.id}>{this.props.items.name}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default  IndividualUserTemplate;