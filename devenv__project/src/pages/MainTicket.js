/*eslint-disable*/
import React, { Component } from "react";
import TicketComponent from "../components/TicketComponent";
import GeneratedQRBlockComponent from "../components/GeneratedQRBlockComponent";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import axios from "axios";


const testOrdersLists = [
    {
        id:1,
        reference: "REF123456789",
        name: "name1",
        description: "description1",
        order_quantity: 45,
        order_departure_location: "Copenhagen, Denmark",
        order_arival_location: "Lisbon, Portugal",
        order_departure_date: "9.9.2045",
        order_arival_date: "9.9.2045",
        order_chemical_types: [
            {
                id: "id1",
                chemical: "H20"
            },
            {
                id: "id2",
                chemical: "HSO4"
            }
        ],
        ticket_status: "pending"
    }
];

class MainTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeReference: "",
            qrblock: false,
            order: [],
            orderId: ""
        }
    }
    
    // set the active reference codes
    getReferenceCodes = (ev) => {
        const referenceCodes = ev.target.name;
        this.setState({activeReference: referenceCodes});
        // const referenceCodes = ev.target.getAttribute("data-reference");
    }

    // toggle qr block state component
    toggleQR = () => {
        this.setState((prevState) => ({qrblock: !prevState.qrblock}))
    }

    // full qr block action function
    qrAction = (ev) => {
        this.getReferenceCodes(ev);
        this.toggleQR(ev)
    }

    // close qr code block component
    closeQR = () => {
        this.setState({qrblock: false})
    }

    componentDidMount() {
        axios.get("https://localhost:8000/orders")
             .then(response => {
                    console.log("main_ticket_response: ", response.data[0].id)
                    this.setState(() => {
                        return {
                            orderId: response.data[0].id,
                            order: response.data
                        }
                    })
             })
             .catch(error => console.log("main_ticket_error: ", error))
    }
    render() {
        return(
            <MobileView>
            <div className="main__ticket">
                <button className="menus">Menus</button>
                <div className="main__ticket--wrapper">
                    <div className="orders__header">
                        <h2>Ticket</h2>
                        <input type="text" placeholder="Search order" name="inbound_gate_officer_search_order" />
                    </div>

                    <div className="orders__wrapperMobile">
                        {
                            this.state.order.map((ticket) => {
                                return <TicketComponent
                                            key={ticket.id}
                                            ticket={ticket}
                                            qrAction={this.qrAction}
                                            orderId={this.state.orderId}
                                       />
                            })
                        }
                    </div>
                </div>
                {
                    this.state.qrblock
                    &&
                    <GeneratedQRBlockComponent
                        referenceCodes={this.state.activeReference}
                        closeQR={this.closeQR}
                    />
                }
            </div>
            </MobileView>
        );
    }
}

export default MainTicket;