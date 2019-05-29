/* eslint-disable */
import React, { Component } from 'react';
import SidebarComponent from '../components/SidebarComponent';
import axios from 'axios';

const warehouses = [
    {
        warehouse_id: 1,
        warehouse_label: 1,
        warehouse_quantity_allowance: 10
    },
    {
        warehouse_id: 2,
        warehouse_label: 2,
        warehouse_quantity_allowance: 12
    },
    {
        warehouse_id: 3,
        warehouse_label: 3,
        warehouse_quantity_allowance: 5
    },
    {
        warehouse_id: 4,
        warehouse_label: 4,
        warehouse_quantity_allowance: 3
    },
    {
        warehouse_id: 5,
        warehouse_label: 5,
        warehouse_quantity_allowance: 9
    }
];

const AdminCreateSiteDetailsComponent = ({
    siteState,
    nextStageSiteToLocation,
    getSitesDatas
}) => (
    <div className="adminCreateSiteDetailsComponent">
    <div className="adminCreateSiteDetailsComponent--wrapper">
        <h2>Details registration</h2>

        <div className="details__registration">
            <input 
                type="text" 
                placeholder="Site Name" 
                name="site_name" 
                value={siteState.site_name}
                onChange={getSitesDatas} 
            />
            <input 
                type="text" 
                placeholder="Site Phone" 
                name="site_phone"
                value={siteState.site_phone} 
                onChange={getSitesDatas} 
            />
            <input 
                type="text" 
                placeholder="Site responsible person" 
                name="site_responsible_person"
                value={siteState.site_responsible_person} 
                onChange={getSitesDatas} 
            />
        </div>
        <div className="next__stage">
            <button 
                className="next__stage--button"
                onClick={nextStageSiteToLocation}
            >
            Next Stage
            </button>
        </div>
    </div>
    {/* AdminCreateSiteDetailsComponent */}
  </div>
);

const AdminCreateSiteLocationComponent = ({
    siteState,
    nextStageSiteToWarehouse,
    getSitesDatas
}) => (
    <div className="adminCreateSiteLocationComponent">
    <div className="adminCreateSiteLocationComponent--wrapper">
        <h2>Location registration</h2>

        <div className="location__registration">
            <input 
                type="text" 
                placeholder="Site Address line 1" 
                name="site_address_line_1" 
                value={siteState.site_address_line_1}
                onChange={getSitesDatas}
            />
            <input 
                type="text" 
                placeholder="Site Address line 2" 
                name="site_address_line_2" 
                value={siteState.site_address_line_2}
                onChange={getSitesDatas}
            />
            <input 
                type="text" 
                placeholder="Country" 
                name="site_country" 
                value={siteState.site_country}
                onChange={getSitesDatas}
            />
            <input 
                type="text" 
                placeholder="Zip Code" 
                name="site_zipcode" 
                value={siteState.site_zipcode}
                onChange={getSitesDatas}
            />
        </div>
        <div className="next__stage">
            <button 
                className="next__stage--button"
                onClick={nextStageSiteToWarehouse}
            >
            Next Stage
            </button>
        </div>
    </div>
    {/* AdminCreateSiteDetailsComponent */}
    </div>
);

const AdminCreateSiteWarehousesComponent = ({getAvailableWarehouses}) => (
    <div className="adminCreateSiteWarehousesComponent">
    <div className="adminCreateSiteWarehousesComponent--wrapper">
        <h2>Warehouses registration</h2>

        <div className="warehouses__registration">
            {
                warehouses.map((warehouse) => {
                    return <AdminWarehouseIndividualComponent
                                warehouse={warehouse}
                                getAvailableWarehouses={getAvailableWarehouses}
                                key={warehouse.warehouse_id} 
                            />
                })
            }
        </div>
        <div className="next__stage">
            <button className="next__stage--button">Create Site</button>
        </div>
    </div>
    {/* AdminCreateSiteDetailsComponent */}
    </div>
);

const AdminWarehouseIndividualComponent = ({
    warehouse,
    getAvailableWarehouses
}) => (
    <div className="adminWarehouseIndividualComponent">
        <div className="adminWarehouseIndividualComponent--wrapper">
            <h2>Warehouse {warehouse.warehouse_label}</h2>
            <p>{warehouse.warehouse_quantity_allowance} kilo-units</p>
            <input 
                type="checkbox"
                name={warehouse.warehouse_label} 
                value={warehouse.warehouse_label} 
                onChange={getAvailableWarehouses} 
            />
        </div>
        {/* AdminWarehouseIndividualComponent */}
    </div>
);

class AdminCreateSite extends Component {
  constructor(props) {
      super(props)
      this.state = {
          siteStateDetails: true,
          siteStateLocation: false,
          siteStateWarehouses: false,
          site_name: "",
          site_phone: "",
          site_responsible_person: "",
          site_address_line_1: "",
          site_address_line_2: "",
          site_country: "",
          site_zipcode: "",
          warehousesLists: []
      }
  }

//   get data site stage details
  getSitesDatas = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;

    this.setState({[name]: value})
  }

//   redirect site creation from details to location
  nextStageSiteToLocation = () => {
      this.setState(() => {
          return {
              siteStateDetails: false,
              siteStateLocation: true
          }
      })
  }

//   redirect site creation from location to warehouse
  nextStageSiteToWarehouse = () => {
      this.setState(() => {
          return {
              siteStateLocation: false,
              siteStateWarehouses: true
          }
      })
  }

//   available warehouses
  getAvailableWarehouses = (ev) => {
    let value = ev.target.value;
    let check = ev.target.checked;
    if(check) {
        this.setState({warehousesLists: [...this.state.warehousesLists, value]})
    }
  }

// make post request create sites
  createSitesRequest = () => {
      let sitesObjectElement = {

      }
      axios.post("http://localhost:8000/create_sites_backend_api_route", sitesObjectElement)
           .then(response => console.log("create_sites_succcess: ", response))
           .catch(error => console.log("create_sites_error: ", error))
  }
  render() {
    let {
        siteStateDetails,
        siteStateLocation,
        siteStateWarehouses
    } = this.state;
    return (
      <div className="admin__createSite">
            <div className="admin__createSite--wrapper">
                <SidebarComponent />
                <div className="create__site">
                    <div className="create__site--wrapper">
                        {
                            siteStateDetails
                            &&
                            <AdminCreateSiteDetailsComponent 
                                siteState={this.state} 
                                nextStageSiteToLocation={this.nextStageSiteToLocation}
                                getSitesDatas={this.getSitesDatas}
                            />
                        }
                        {
                            siteStateLocation
                            &&
                            <AdminCreateSiteLocationComponent
                                siteState={this.state} 
                                nextStageSiteToWarehouse={this.nextStageSiteToWarehouse}
                                getSitesDatas={this.getSitesDatas}
                            />
                        }
                        {
                            siteStateWarehouses
                            &&
                            <AdminCreateSiteWarehousesComponent
                                getAvailableWarehouses={this.getAvailableWarehouses}
                            />
                        }
                        {/* create__sites */}
                    </div>
                </div>
                {/* admin__create */}
            </div>
      </div>
    )
  }
}

export default AdminCreateSite;