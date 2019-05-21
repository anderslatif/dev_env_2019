/*eslint-disable*/
import React, { Component } from "react";
import { QRCode } from "react-qr-svg";

class GeneratedQRBlockComponent extends Component {
    render(props) {
        let {
            referenceCodes,
            closeQR
        } = this.props;
        return(
            <div className="generatedQRBlockComponent">
                <div className="generatedQRBlockComponent--wrapper">
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 256 }}
                        value={referenceCodes}
                    />
                </div>
                <button className="close__qrcode"
                    onClick={closeQR}
                >
                Close QR
                </button>
            </div>
        );
    }
}

export default GeneratedQRBlockComponent;