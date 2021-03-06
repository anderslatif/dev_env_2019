/*eslint-disable*/
import React, { Component } from "react";

const chemicalTypes = [
    {
        id: 1,
        chemical_type: "A"
    },
    {
        id: 2,
        chemical_type: "B",
    },
    {
        id: 2,
        chemical_type: "C"
    }
];

class SalesDistributorCreateOrderComponent extends Component {
    render(props) {
        let {
            getDistributorDatas,
            stateChemicalsTypes,
            getDistributorChemicals,
            order_quantity,
            getChemicalDatas,
            getChemicalValue,
            ordersState,
            postChemicalOrder
        } = this.props;
        return(
            <div className="salesDistributorCreateOrderComponent">
                <div className="salesDistributorCreateOrderComponent--wrapper">
                    {/* SalesDistributorCreateOrderComponent */}
                    <h2>Create order</h2>
                    <div className="order__creatorwrapper">
                        <div className="order__creatorwrapper--input">
                            <h2>Fill datas:</h2>
                            {/* <input type="text" placeholder="Order name" name="order_name" onChange={getDistributorDatas} /> */}
                            {/* <input type="text" placeholder="Order description" name="order_description" onChange={getDistributorDatas} /> */}
                            {/* <input type="number" placeholder="Order quantity" name="order_quantity" onChange={getDistributorDatas} /> */}
                            <input type="text" placeholder="Departure location" name="order_departure_location" onChange={getDistributorDatas} />
                            <input type="text" placeholder="Arival location" name="order_arival_location" onChange={getDistributorDatas} />
                            <input type="date" placeholder="Departure date" name="order_departure_date" onChange={getDistributorDatas} />
                            <input type="date" placeholder="Arival date" name="order_arival_date" onChange={getDistributorDatas} />
                            <div className="addChemicalsDivision">
                                {/* <input type="text" placeholder="Chemicals types" name="chemical_type" onChange={getDistributorDatas} />
                                <button onClick={getDistributorChemicals}>Register Chemicals</button> */}
                                <p>Chemical Types:</p>
                                <select name="chemical_type" onChange={getChemicalValue}>
                                    {
                                        chemicalTypes.map((chemical) => {
                                            return <option 
                                                        value={chemical.chemical_type} 
                                                        name="chemical_type" 
                                                        key={chemical.id} 
                                                        // onChange={getChemicalValue}
                                                    >
                                                        {chemical.chemical_type}
                                                    </option>
                                        })
                                    }
                                </select>
                            </div>
                            <input type="text" placeholder="kg" name="chemical_weight" onChange={getChemicalValue} />
                            <button onClick={getChemicalDatas}>Register Chemical</button>
                            <button onClick={postChemicalOrder}>Create order</button>
                        </div>
                        <div className="order__creatorwrapper--display">
                            <div className="order__creatorwrapper--display--wrapper">
                                <h2>Chemical Types</h2>
                                {
                                    ordersState.order_chemical_types.map((chemical) => {
                                        return <div className="view__orderchemical">
                                                <p className="chemical__views" key={chemical.id}>{chemical.chemical}</p>
                                                <p>{chemical.weight} kg</p>
                                               </div>
                                    })
                                }
                                {
                                    order_quantity
                                    &&
                                    <div className="create__total">
                                        <p>Kilo Units: {order_quantity} kg</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// sale_id: 1,
// sale_name: "Shipment toxic 1",
// sales_description: "Shipment description 1",
// shipment_quantity: 45,
// departure_location: "Copenhagen, Denmark",
// arival_location: "Lisbon, Portugal",
// departure_date: "2.2.2045",
// expected_arival: "9.2.2045",
// chimical_types: ["NaOH", "H2SO4", "K2SO4"],
// reference_code: "REF123456789",
// gate_inbound_status: "pending",
// warehouse_loader_status: "pending",
// warehouse_dispatcher_status: "pending"

export default SalesDistributorCreateOrderComponent;