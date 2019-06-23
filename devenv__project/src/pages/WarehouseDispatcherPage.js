/*eslint-disable*/
import React, { Component } from "react";
import { MobileView } from "react-device-detect";
import QrReader from "react-qr-reader";

class WarehouseDispatcherPage extends Component {
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
            <div className="warehouseDispatcherPage">
                <button className="menus">Menus</button>
                <div className="warehouseDispatcherPage--wrapper">
                    <div className="orders__header">
                        <h2>Warehouse Dispatcher</h2>
                        <input type="text" placeholder="Search order" name="warehouse_dispatcher_search_order" />
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
            </div>
            </MobileView>
        );
    }
}

export default WarehouseDispatcherPage;