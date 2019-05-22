/*eslint-disable*/
import React, { Component } from "react";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import QrReader from 'react-qr-reader';

class WarehouseLoaderPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: "No result",
            delay: 100,
            responese: "Pending"
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
        console.error(err)
    }
    render() {
        return(
            <MobileView>
            <div className="warehouseLoaderPage">
                <button className="menus">Menus</button>
                <div className="warehouseLoaderPage--wrapper">
                    <div className="orders__header">
                        <h2>Warehouse Loader</h2>
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
                {/* WarehouseLoaderPage */}
            </div>
            </MobileView>
        );
    }
}

export default WarehouseLoaderPage;