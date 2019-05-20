/*eslint-disable*/
import React, { Component } from "react";

class TicketComponent extends Component {
    render(props) {
        let {
            ticket, 
            qrAction
        } = this.props;
        return(
            <div className="ticket__component">
                <div className="ticket__component--wrapper">
                    <div className="ticket__referencecode">
                        <h2>Referene code: {ticket.reference}</h2>
                    </div>
                    <div className="ticket__departureLocation">
                        <div className="ticket__departureLocation--identifier">A</div>
                        <p>Departure: {ticket.order_departure_location}</p>
                    </div>
                    <div className="ticket__arivalLocation">
                        <div className="ticket__arivalLocation--identifier">B</div>
                        <p>Arival: {ticket.order_arival_location}</p>
                    </div>
                    <div className="ticket__status">
                        <p>Status: {ticket.ticket_status}</p>
                    </div>
                    <div className="generate__qrdivision">
                        <button 
                            className="ticket__generateqr" 
                            name={ticket.reference}
                            onClick={qrAction}
                        >
                        Generate QR
                        </button>                    
                    </div>
                </div>
            </div>
        );
    }
}

export default TicketComponent;