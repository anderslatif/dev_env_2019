/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import SalesDistributorViewComponent from "../components/SalesDistributorViewComponent";

const sales = [
    {
        sale_id: 1,
        sale_name: "Shipment toxic 1",
        sales_description: "Shipment description 1",
        shipment_quantity: 45,
        departure_location: "Copenhagen, Denmark",
        arival_location: "Lisbon, Portugal",
        departure_date: "2.2.2045",
        expected_arival: "9.2.2045",
        chimical_types: ["NaOH", "H2SO4", "K2SO4"],
        reference_code: "REF123456789",
        gate_inbound_status: "pending",
        warehouse_loader_status: "pending",
        warehouse_dispatcher_status: "pending"
    }
];

class SalesDistributorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expansionOrderState: false
        }
    }

    // expand order
    handleExpandOrder = () => {
        this.setState((prevState) => ({expansionOrderState: !prevState.expansionOrderState}))
    }
    render() {
        return(
            <div className="salesDistributorPage"> 
                <div className="salesDistributorPage--wrapper">
                    <SidebarComponent />
                    <SalesDistributorViewComponent
                        sales={sales}
                        expansionOrderState={this.state}
                        handleExpandOrder={this.handleExpandOrder}
                    />
                </div>
            </div>
        );
    }
}

export default SalesDistributorPage;