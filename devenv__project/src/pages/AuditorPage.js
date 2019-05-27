/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import AuditOrder from "../components/AuditOrder";

const auditOrderTests = [
    {
        id: 1,
        departure_location: "location__a",
        arrival_location: "locaiton__b",
        code_reference: "REF123456789",
        gate_officer_status: "pending",
        warehouse_loader: "pending",
        warehouse_dispatcher: "pending",
        global_status: "pending"
    },
    {
        id: 2,
        departure_location: "location__a",
        arrival_location: "locaiton__b",
        code_reference: "REF123456789",
        gate_officer_status: "pending",
        warehouse_loader: "pending",
        warehouse_dispatcher: "pending",
        global_status: "pending"
    }
];

class AuditorPage extends Component {
    render() {
        return(
            <div className="auditor__page">
                <div className="auditor__page--wrapper">
                    <SidebarComponent />
                    <div className="display__ordersAuditor">
                        <div className="display__ordersAuditor--wrapper">
                            <h2 className="category__title">Auditor Orders (Only read access)</h2>
                            <div className="display__content">
                                {
                                    auditOrderTests.map((order) => {
                                        return <AuditOrder
                                                key={order.id}
                                                order={order}
                                               />
                                    })
                                }
                            </div>
                        </div>
                        {/* auditor__page */}
                    </div>
                </div>
            </div>
        );
    }
}

export default AuditorPage;