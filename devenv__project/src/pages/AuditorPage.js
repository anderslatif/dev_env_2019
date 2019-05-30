/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import AuditOrder from "../components/AuditOrder";
import axios from "axios";

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
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            active__page: "HR",
            sortBy: "",
            searchInputValue: "" ,
            filteredUsers: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/users")
             .then(response => {
                 console.log("get_usesr_success: ", response)
                 this.setState({users: response.data})
                })
             .catch(error => console.log("get_users_error:", error))
    }
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