/*eslint-disable*/
import React, { Component } from 'react';
import SidebarComponent from '../components/SidebarComponent';
import SalesDistributorCreateOrderComponent from '../components/SalesDistributorCreateOrderComponent';
import axios from "axios";

class SalesDistributorCreateOrderPage extends Component {
  constructor(props) {
      super(props)
      this.state = {
        // chemicals: [],
        // order_name: "",
        // order_description: "",
        order_quantity: "",
        order_departure_location: "",
        order_arival_location: "",
        order_departure_date: "",
        order_arival_date: "",
        chemical_type: "",
        chemical_weight: "",
        order_chemical_types: [],
        chemicals_tracker: 0
      }
  }

//   get sales distributor order creator datas
  getDistributorDatas = (ev) => {
    let value = ev.target.value;
    let name = ev.target.name;

    this.setState({[name]: value});
  }

//   register each chemical type datas
  getDistributorChemicals = () => {
    this.setState((prevState) => ({chemicals_tracker: prevState.chemicals_tracker + 1}))
    const newOrderChemical = {
        id: `CH${this.state.chemicals_tracker}`,
        chemical: this.state.chemical_type
    }
    this.setState({order_chemical_types: [...this.state.order_chemical_types, newOrderChemical]})
    console.log(this.state.order_chemical_types);
    // this.setState({chemical_type: ""});
  }

  // register chemical types object datas
  getChemicalValue = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;

    this.setState({[name]: value})
  }

  getChemicalDatas = (ev) => {
    const newChemicalOrder = {
      // id: "",
      chemical: this.state.chemical_type,
      weight: this.state.chemical_weight
    };
    
    this.setState({order_chemical_types: [...this.state.order_chemical_types, newChemicalOrder]})
    console.log(this.state.order_chemical_types)
  }

  postChemicalOrder = () => {
    let order = {
      other_source: this.state.order_departure_location,
      other_destination: this.state.order_arival_location
    }

    axios.post("https://localhost:8000/orders", order)
         .then(response => console.log("create__order__response: ", response))
         .catch(error => console.log("create__order__error: ", error))
    }
  render() {
    return (
      <div className="salesDistributorCreateOrderPage">
        <div className="salesDistributorCreateOrderPage--wrapper">
            <SidebarComponent activePageStatus="SALES_DISTRIBUTOR" />
            <SalesDistributorCreateOrderComponent
                getDistributorDatas={this.getDistributorDatas} //get datas
                getDistributorChemicals={this.getDistributorChemicals} //get chemicals
                stateChemicalsTypes={this.state.order_chemical_types} //state chemicals
                order_quantity={this.state.order_quantity} //state quantity
                getChemicalValue={this.getChemicalValue}
                getChemicalDatas={this.getChemicalDatas}
                ordersState={this.state}
                postChemicalOrder={this.postChemicalOrder}
            />
        </div>
      </div>
    )
  }
}

export default SalesDistributorCreateOrderPage;