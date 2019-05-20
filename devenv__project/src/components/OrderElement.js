/*eslint-disable*/
import React, { Component } from "react";

class OrderElement extends Component {
    render(props) {
        let {
            order,
            getReferenceCodes,
            toggleQR,
            qrAction
        } = this.props;
        return(
            <div className="order__element">
                {order.name}
                <button 
                    date-reference={order.reference}
                    name={order.reference}
                    onClick={qrAction}
                >
                QR
                </button>
            </div>
        );
    }
}

export default OrderElement;