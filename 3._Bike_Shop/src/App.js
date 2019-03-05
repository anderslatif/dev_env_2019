import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import ProductsComponent from './components/ProductsComponent';
// import uuid from "uuid";
// import logo from './logo.svg';
// import './App.css';

const testProducts = [
  {
    productName:"product a",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:1
  },
  {
    productName:"product b",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:2
  },
  {
    productName:"product c",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:3
  },
  {
    productName:"product d",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:4
  },
  {
    productName:"product e",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:5
  }
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: testProducts,
      searchField: ""
    }
    this.filterProductsLists = this.filterProductsLists.bind(this)
  }
  
  filterProductsLists = (ev) => {
    let productsSearch = ev.target.value;
    this.setState({searchField: productsSearch})

    console.log(productsSearch)
  }
  render() {
    const filteredProducts = this.state.products.filter(product => {
      return product.productName.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
      <HeaderComponent search={this.filterProductsLists}/>
      <ProductsComponent products={ filteredProducts }/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
