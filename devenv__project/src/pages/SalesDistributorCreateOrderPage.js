/*eslint-disable*/
import React, { Component } from 'react';
import SidebarComponent from '../components/SidebarComponent';
import SalesDistributorCreateOrderComponent from '../components/SalesDistributorCreateOrderComponent';

class SalesDistributorCreateOrderPage extends Component {
  constructor(props) {
      super(props)
      this.state = {
        order_name: "",
        order_description: "",
        order_quantity: "",
        order_departure_location: "",
        order_arival_location: "",
        order_departure_date: "",
        order_arival_date: "",
        chemical_type: "",
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
  render() {
    return (
      <div className="salesDistributorCreateOrderPage">
        <div className="salesDistributorCreateOrderPage--wrapper">
            <SidebarComponent />
            <SalesDistributorCreateOrderComponent
                getDistributorDatas={this.getDistributorDatas} //get datas
                getDistributorChemicals={this.getDistributorChemicals} //get chemicals
                stateChemicalsTypes={this.state.order_chemical_types} //state chemicals
                order_quantity={this.state.order_quantity} //state quantity
            />
        </div>
        {/* SalesDistributorCreateOrderPage */}
      </div>
    )
  }
}

export default SalesDistributorCreateOrderPage;