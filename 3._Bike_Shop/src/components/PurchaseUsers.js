import React, { Component } from 'react'

class PurchaseUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateStatusState: false,
      usersDatasState: false,
      cardsDatasStatus: false
    }
    this.toggleStatusState = this.toggleStatusState.bind(this)
    this.toggleUsersState = this.toggleUsersState.bind(this)
    this.toggleCardsStatus = this.toggleCardsStatus.bind(this)
  }

  toggleStatusState = () => {
    this.setState((prevState) => ({dateStatusState: !prevState.dateStatusState}))
  }

  toggleUsersState = () => {
    this.setState((prevState) => ({usersDatasState: !prevState.usersDatasState}))
  }

  toggleCardsStatus = () => {
    this.setState((prevState) => ({cardsDatasStatus: !prevState.cardsDatasStatus}))
  }
  render() {
    return (
      <div className="purchase__users">
      <form className="billingUsersDatas">
        {/* extra information for renting product */}
        <div className="purchase__users--extra">
          <div className="purchase__DatePicker">
          <div className={this.state.dateStatusState ? "status__users--active" : "status__users--inactive"} onClick={this.toggleStatusState}>
              {
                this.state.dateStatusState ? 
                <svg><use href="./image/sprite.svg#icon-minus"></use></svg> :
                "1"
              }
          </div>
            <h2>Date Information</h2>
            <p>Please select a data range:</p>
          </div>
          <div className={this.state.dateStatusState ? "purchase__DateElement--overfloated" : "purchase__DateElement"}>
          <p>Select a date range to rent</p>
          <input type="date"/>
            {/* <p>tests</p> */}
          </div>
        </div>

        {/* input about the users who are renting */}
        <div className="purchase__users--profile">
          <div className="purchase__UsersTitle">
            <div className={this.state.usersDatasState ? "status__usersDatas--active" : "status__usersDatas--inactive"} onClick={this.toggleUsersState}>
              {
                this.state.usersDatasState ? 
                <svg><use href="./image/sprite.svg#icon-minus"></use></svg> :
                "2"
              }
            </div>
            <h2>Date Information</h2>
            <p>Please fill in all the personal information</p>
          </div>
          <div className={this.state.usersDatasState ? "purchase__usersDatas--overfloated" : "purchase__usersDatas"}>
            <div className="billing__formgroup">
              <label htmlFor="userFullName">Full Name:</label>
              <input id="userFullName" name="userFullName"/>
            </div>
            <div className="billing__formgroup">
              <label htmlFor="userEmail">Personal Email:</label>
              <input id="userEmail" name="userEmail"/>
            </div>
            <div className="billing__formgroup">
              <label htmlFor="userPhoneNumber">Phone Number:</label>
              <input id="userPhoneNumber" name="userPhoneNumber"/>
            </div>
            {/* <p>tests</p> */}
          </div>
        </div>

        {/* input about the card information */}
        <div className="purchase__users--cards">
          <div className="purchase__CardsTitle">
            <div className={this.state.cardsDatasStatus ? "status__CardsTitle--active" : "status__CardsTitle--inactive"} onClick={this.toggleCardsStatus}>
              {
                this.state.cardsDatasStatus ? 
                <svg><use href="./image/sprite.svg#icon-minus"></use></svg> :
                "3"
              }
            </div>
            <h2>Payment Information</h2>
            <p>Please fill in the card payment information</p>
          </div>
          <div className={this.state.cardsDatasStatus ? "purchase__CardDatas--overfloated" : "purchase__usersDatas"}>
            <div className="billing__formgroup">
              <label htmlFor="cardHolderFullName">Card holder full name:</label>
              <input id="cardHolderFullName" name="cardHolderFullName"/>
            </div>
            <div className="billing__formgroup">
              <label htmlFor="cardNumber">Card Number:</label>
              <input id="cardNumber" name="cardNumber"/>
            </div>
            <div className="billing__formgroup">
              <label htmlFor="cardCvc">CVC:</label>
              <input id="cardCvc" name="cardCvc"/>
            </div>
            {/* <div className="billing__formgroup">
              <label htmlFor="">Card Number:</label>
              <input id="cardNumber" name="cardNumber"/>
            </div> */}
              <div className="billing__formgroup">
              <label htmlFor="cardExpirationDate">Expiration Date:</label>
                <input id="cardExpirationDate" name="cardExpirationDateMonth" placeholder="Expiration Month"/>
              </div>
              <div className="billing__formgroup">
                <input id="cardExpirationDate" name="cardExpirationDateYear" placeholder="Expiration Year" type="number"/>
              </div>
            {/* <p>tests</p> */}
          </div>
        </div>
        {/* PurchaseUsers */}
        <button className="finish__purchase">Finish Purchase</button>
      </form>
      </div>
    )
  }
}

export default PurchaseUsers;