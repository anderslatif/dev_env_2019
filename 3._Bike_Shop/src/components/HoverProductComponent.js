import React, { Component } from 'react'

const HoverProductComponent = () => {
    return (
        <div className="hover__products">
            <svg>
                <use href="./image/sprite.svg#icon-shopping-cart"></use>
            </svg>
            <svg>
                <use href="./image/sprite.svg#icon-eye"></use>
            </svg>
            {/* HoverProductComponent */}
        </div>
    )
}

export default HoverProductComponent;