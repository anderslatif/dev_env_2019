/*eslint-disable*/
import React, { Component } from "react";
import QrReader from 'react-qr-reader';
import OrderElement from "../components/OrderElement";
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
        ]
    }
];

class InboundGateOfficerPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeReference: "",
            qrblock: false,
            delay: 100,
            result: "No Results",
            responese: "Pending",
            facingMode: "environment"
        }
    }

    handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
    }
    
    handleError = err => {
        console.log(err)
    }

    sendRequestOrder = () => {
        
    }
    render() {
        const previewStyle = {
            height: 240,
            width: 320,
        }
        return(
            <MobileView>
            <div className="inboundGateOfficerPage">
                <button className="menus">Menus</button>
                <div className="inboundGateOfficerPage--wrapper">
                    <div className="orders__header">
                        <h2>Inbound gate officer</h2>
                        <input type="text" placeholder="Search order" name="inbound_gate_officer_search_order" />
                    </div>

                    <div className="orders__wrapperMobile">
                    <QrReader
                        delay={300}
                        facingMode={"environment"}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                    <p className="refCodeDecoded">{this.state.result}</p>
                    <p className="orderStatusStage">{this.state.responese}</p>
                    <button className="button__gateQR">Check Availability</button>
                    </div>
                </div>
                {/* InboundGateOfficerPage */}
            </div>
            </MobileView>
        );
    }
}

export default InboundGateOfficerPage;