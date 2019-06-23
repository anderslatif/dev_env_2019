/*eslint-disable*/
import React, { Component } from "react";

class AuditExtendedOrderComponent extends Component {
    render(props) {
        let {
            gate_officer_status,
            warehouse_loader,
            warehouse_dispatcher
        } = this.props.order;
        return(
            <div className="auditExtendedOrderComponent">
                <div className="extraAuditContent">#1. Gate Officer -  <span>{gate_officer_status}</span></div>
                <div className="extraAuditContent">#2. Warehouse Loader - <span>{warehouse_loader}</span></div>
                <div className="extraAuditContent">#3. Warehouse Dispatcher - <span>{warehouse_dispatcher}</span></div>
            </div>
        );
    }
}

export default AuditExtendedOrderComponent;