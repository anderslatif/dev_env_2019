/*eslint-disable*/
import React, { Component } from "react";

class AdminViewOrderElements extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { order } = this.props;
        return(
            <div className="adminViewOrderElements">
                    <div className="salesDistributorViewIndividualComponent--upper">
                    <div className="salesDistributorViewIndividualComponent--upper--reference">
                        <p>Reference #</p>
                        <h2>{order.reference_code}</h2>
                    </div>
                    <div className="salesDistributorViewIndividualComponent--upper--kilounits">
                        <p>Distributed kilo-units</p>
                        <h2>{order.shipment_quantity} kg</h2>
                    </div>
                </div>
                <div className="salesDistributorViewIndividualComponent--innercontent">
                    <div className="salesDistributorViewIndividualComponent--innercontent--blockFirst">
                        <div className="block__marks"><p>A</p></div>
                        <div className="block__content">
                            <h2>{order.sale_name}</h2>
                            <p>{order.departure_location} <span>Date Departure:{order.departure_date}</span></p>
                        </div>
                    </div>

                    {/* {
                        expansionOrderState.expansionOrderState
                        &&
                        <div>
                            <div className="salesDistributorViewIndividualComponent--innercontent--blockExtend">
                                <div className="block__marks"><p>B</p></div>
                                <div className="block__content">
                                    <h2>Inbound gate officer extend</h2>
                                    <p className="departure__location">{order.departure_location} extend</p>
                                    <span className="pending__order">{order.gate_inbound_status}</span>
                                </div>
                            </div>
                            <div className="salesDistributorViewIndividualComponent--innercontent--blockExtend">
                                <div className="block__marks"><p>C</p></div>
                                <div className="block__content">
                                    <h2>Warehouse loader extend</h2>
                                    <p className="departure__location">{order.departure_location} extend</p>
                                    <span className="pending__order">{order.warehouse_loader_status}</span>
                                </div>
                            </div>
                            <div className="salesDistributorViewIndividualComponent--innercontent--blockExtend">
                                <div className="block__marks"><p>D</p></div>
                                <div className="block__content">
                                    <h2>Warehouse dispatcher extend</h2>
                                    <p className="departure__location">{order.departure_location} extend</p>
                                    <span className="pending__order">{order.warehouse_dispatcher_status}</span>
                                </div>
                            </div>
                        </div>
                    } */}

                    <div className="salesDistributorViewIndividualComponent--innercontent--blockLast">
                        <div className="block__marks"><p>E</p></div>
                        <div className="block__content">
                            <h2>{order.sale_name}</h2>
                            <p>{order.arival_location} <span>Expected Arival:{order.expected_arival}</span></p>
                        </div>
                        {/* <button onClick={handleExpandOrder}>{expansionOrderState.expansionOrderState ? "Minimize" : "Expand"}</button> */}
                    </div>
                </div>
                {/* SalesDistributorViewIndividualComponent
                {order.sales_id}
                {order.sale_name}
                {order.sales_description}
                {order.shipment_quantity}
                {order.departure_location}
                {order.arival_location}
                {order.departure_date}
                {order.expected_arival}
                {order.chimical_types}
                {order.reference_code}
                {order.gate_inbound_status}
                {order.warehouse_loader_status}
                {order.warehouse_dispatcher_status} */}
                {/* AdminViewOrderElements       */}
            </div>
        );
    }
}

export default AdminViewOrderElements;