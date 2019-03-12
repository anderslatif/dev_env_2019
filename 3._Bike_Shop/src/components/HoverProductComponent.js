import React, { Component } from 'react'

class HoverProductComponent extends Component {
    render(props) {
        return (
            <div className="hover__products">
            <svg onClick={this.props.addProductsCarts} data-id={this.props.productId}>
                <use href="./image/sprite.svg#icon-shopping-cart"></use>
            </svg>
            <svg onClick={this.props.views} data-id={this.props.productId}>
                <use href="./image/sprite.svg#icon-eye"></use>
            </svg>
            {/* HoverProductComponent */}
        </div>
    )
}
}

export default HoverProductComponent;