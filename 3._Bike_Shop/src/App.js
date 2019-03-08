import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import ProductsComponent from './components/ProductsComponent';
import ProductViews from './components/ProductViews';
import uuid from "uuid";
import FiltersComponent from './components/FiltersComponent';
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
    productId:uuid()
  },
  {
    productName:"product b",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:uuid()
  },
  {
    productName:"product c",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:uuid()
  },
  {
    productName:"product d",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:uuid()
  },
  {
    productName:"product e",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__a-1",
      "./image/product__a-2"
    ],
    productId:uuid()
  }
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: testProducts,
      searchField: "",
      productViews: false,
      filtersViews: false,
      cartProducts: []
    }
    this.filterProductsLists = this.filterProductsLists.bind(this)
    this.activateProductViews = this.activateProductViews.bind(this)
    this.activateFiltersViews = this.activateFiltersViews.bind(this)
    this.addProductsCarts = this.addProductsCarts.bind(this)
    this.removeProductsCarts = this.removeProductsCarts.bind(this)
  }
<<<<<<< HEAD
=======

>>>>>>> ca8398304e630fe3980b2e9bacbd9c4566c5fa13
  filterProductsLists = (ev) => {
    let productsSearch = ev.target.value;
    this.setState({searchField: productsSearch})

    console.log(productsSearch)
  }
  activateProductViews = () => {
    this.setState((prevState) => ({productViews: !prevState.productViews}))
  }
<<<<<<< HEAD
  activateFiltersViews = () => {
    this.setState((prevState) => ({filtersViews: !prevState.filtersViews}))
  }
  addProductsCarts = (ev) => {
    console.log("addProductsCarts");
      this.state.cartProducts.push(ev.currentTarget.getAttribute("data-id"))
  }
  removeProductsCarts = (ev) => {
    let productId = ev.currentTarget.getAttribute("data-id")
    const cartProducts = this.state.cartProducts.filter((prod) => prod !== productId)
    this.setState({cartProducts})
  }
  componentDidMount() {
    console.log(uuid())
    this.state.products.map((product) => {
      return console.log(product.productId)
    })
  }  
=======

>>>>>>> ca8398304e630fe3980b2e9bacbd9c4566c5fa13
  render() {
    const filteredProducts = this.state.products.filter(product => {
      return product.productName.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
      <HeaderComponent 
        products={this.state.products} 
        cartProducts={this.state.cartProducts} 
        search={this.filterProductsLists}
        removeProductsCarts={this.removeProductsCarts}
      />
      <ProductsComponent 
        addProductsCarts={this.addProductsCarts} 
        products={ filteredProducts } 
        views={this.activateProductViews}
      />
      {this.state.productViews && <ProductViews closeViews={this.activateProductViews}/>}
      <button onClick={this.activateFiltersViews}>filters</button>
      {this.state.filtersViews && <FiltersComponent/>}
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
