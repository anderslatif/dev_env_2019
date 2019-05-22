/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import AdminViewOrderElements from "../components/AdminViewOrderElements";

const orders = [
    {
        sales_id: "1",
        sale_name: "name1",
        sales_description: "description1",
        shipment_quantity: "45",
        departure_location: "location1a",
        arival_location: "location1b",
        departure_date: "date1a",
        expected_arival: "date1a",
        chimical_types: [],
        reference_code: "ref123456789",
        gate_inbound_status: "pending",
        warehouse_loader_status: "pending",
        warehouse_dispatcher_status: "pending"
    },
    {
        sales_id: "2",
        sale_name: "name2",
        sales_description: "description2",
        shipment_quantity: "95",
        departure_location: "location2a",
        arival_location: "location2b",
        departure_date: "date2a",
        expected_arival: "date2b",
        chimical_types: [],
        reference_code: "ref123456789",
        gate_inbound_status: "pending",
        warehouse_loader_status: "pending",
        warehouse_dispatcher_status: "pending"
    }
];

class AdminViewOrdersPage extends Component {
    render() {
        return(
            <div className="adminViewOrdersPage">
                <div className="adminViewOrdersPage--wrapper">
                    <SidebarComponent />
                    <div className="display__orders">
                        <div className="display__orders--wrapper">
                            <h2 className="category__title">Admin Orders</h2>
                            {
                                orders.map((order) => {
                                    return <AdminViewOrderElements 
                                                order={order}
                                           />
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* AdminViewOrdersPage */}
            </div>
        );
    }
}

export default AdminViewOrdersPage;