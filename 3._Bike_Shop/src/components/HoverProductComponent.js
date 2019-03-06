import React, { Component } from 'react'

class HoverProductComponent extends Component {
    render(props) {
        return (
            <div className="hover__products">
            <svg>
                <use href="./image/sprite.svg#icon-shopping-cart"></use>
            </svg>
            <svg onClick={this.props.views}>
                <use href="./image/sprite.svg#icon-eye"></use>
            </svg>
            {/* HoverProductComponent */}
        </div>
    )
}
}

export default HoverProductComponent;