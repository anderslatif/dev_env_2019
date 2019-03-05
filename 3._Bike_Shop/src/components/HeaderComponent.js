import React, { Component } from 'react'
import SearchComponent from './SearchComponent';
import CartsComponent from './CartsComponent';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchState: false,
            cartState: false
        }
        this.activateSearchProducts = this.activateSearchProducts.bind(this)
        this.activateCartComponent = this.activateCartComponent.bind(this)
    }

    activateSearchProducts = () => {
        this.setState((prevState) => ({ searchState: !prevState.searchState }))
    }

    activateCartComponent = () => {
        this.setState((prevState) => ({ cartState: !prevState.cartState }))
    }
    render(props) {
        // let { search } = this.props;
        return (
        <div className="header__component">
            <div className="header__component--wrapper">
                <div className="logo__division">
                    <h2>Bikes</h2>
                </div>
                <div className="interactions__division">
                    { this.state.searchState && <SearchComponent search={ this.props.search }/> }
                    <svg onClick={this.activateSearchProducts}>
                        <use href="./image/sprite.svg#icon-search"></use>
                    </svg>
                    <svg onClick={this.activateCartComponent}>
                        <use href="./image/sprite.svg#icon-shopping-cart"></use>
                    </svg>
                </div>
            </div>
            { this.state.cartState && <CartsComponent closeCart={this.activateCartComponent}/> }
            {/* HeaderComponent */}
        </div>
        )
    }
}

export default HeaderComponent;