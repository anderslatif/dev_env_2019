/*eslint-disable*/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuditExtendedOrderComponent from "./AuditExtendedOrderComponent";

class AuditOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            extendedAuditorOrder: false
        }
    }
    // extend auditor order extra datas
    extendedAuditorOrder = () => {
        this.setState((prevState) => ({extendedAuditorOrder: !prevState.extendedAuditorOrder }))
    }
    render(props) {
        let {
            departure_location,
            arrival_location,
            code_reference,
            global_status
        } = this.props.order;
        // const extended = {
        //     departure_location: this.props.departure_location,
        //     arrival_location: this.props.arrival_location,
        //     code_reference: this.props.code_reference,
        //     global_status: this.props.global_status
        // }
        return(
            <div className="audit__orderElement">
                <div className="audit__orderElement--wrapper">
                    <div className="audit__block code_reference">{code_reference}</div>
                    <div className="audit__block">{departure_location}</div>
                    <div className="audit__block">{arrival_location}</div>
                    <div className="audit__block global__stauts">{global_status}</div>
                    <button onClick={this.extendedAuditorOrder}>Audit</button>
                </div>
                {
                    this.state.extendedAuditorOrder
                    &&
                    <AuditExtendedOrderComponent order={this.props.order}/>
                }
                {/* AuditOrder */}
            </div>
        );
    }
}

export default AuditOrder;