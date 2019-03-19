import React, { Component } from 'react'
import AdminHeader from './AdminHeader';
import AdminFilters from './AdminFilters';
import AdminPuchases from './AdminPuchases';
import moment from "moment";

const adminProducts = [
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber1",
    customer:"Customer member",
    product:"product a",
    price:441
  },
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber2",
    customer:"Customer member",
    product:"product b",
    price:442
  },
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber3",
    customer:"Customer member",
    product:"product c",
    price:443
  },
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber4",
    customer:"Customer member",
    product:"product d",
    price:444
  },
  {
    date:moment().format("DD MM YYYY H mm"),
    staff:"Staff memeber5",
    customer:"Customer member",
    product:"product e",
    price:445
  }
];

const EntriesObjects = (
  {
    toggleAdminEntriesSearch, 
    adminEntriesSearch, 
    adminProducts, 
    getAdminEntriesSearchValue,
    getSortType,
    sortType
  }
  ) => (
  <div className="entries__wrapper">
    <AdminFilters 
      toggleAdminEntriesSearch={toggleAdminEntriesSearch}
      adminEntriesSearch={adminEntriesSearch}
      getAdminEntriesSearchValue={getAdminEntriesSearchValue}
      getSortType={getSortType}
    >
    </AdminFilters>
    <AdminPuchases 
      adminProducts={adminProducts} 
      sortType={sortType}
    >
    </AdminPuchases>
    {/* EntriesObjects */}
  </div>
);

class SubpageEntries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adminEntriesSearchValue: "",
      adminEntriesSearch: false,
      adminProducts:adminProducts,
      sortType:"ascending"
    }
    this.toggleAdminEntriesSearch = this.toggleAdminEntriesSearch.bind(this)
    this.getAdminEntriesSearchValue = this.getAdminEntriesSearchValue.bind(this)
    this.getSortType = this.getSortType.bind(this)
  }

  toggleAdminEntriesSearch = () => {
    this.setState((prevState) => ({adminEntriesSearch: !prevState.adminEntriesSearch}))
  }

  getAdminEntriesSearchValue = (ev) => {
    let adminEntriesSearchValue = ev.target.value;
    this.setState({adminEntriesSearchValue})
  }

  getSortType = (ev) => {
    let sortType = ev.target.value;
    this.setState({sortType})
  }
  render() {
    // const getCorrectDatas = (adminProducts, sortType) => {
    //   return adminProducts.filter((entry) => {
    //     return entry.product.toLowerCase().includes(this.state.adminEntriesSearchValue.toLowerCase())
    //   }).sort((a, b) => {
    //     if(this.state.sortType === "ascending") {
    //       return a.price < b.price ? 1 : -1
    //     }
    //   })
    // }
    const filteredEntries = this.state.adminProducts.filter(entry => {
      return entry.product.toLowerCase().includes(this.state.adminEntriesSearchValue.toLowerCase())
    })
    return (
      <div className="subpage__entries">
        <AdminHeader></AdminHeader>
        <EntriesObjects 
          toggleAdminEntriesSearch={this.toggleAdminEntriesSearch}
          adminEntriesSearch={this.state.adminEntriesSearch}
          adminProducts={filteredEntries}
          getAdminEntriesSearchValue={this.getAdminEntriesSearchValue}
          sortType={this.state.sortType}
          getSortType={this.getSortType}
        >
        </EntriesObjects>
        {/* SubpageEntries */}
      </div>
    )
  }
}

export default SubpageEntries;