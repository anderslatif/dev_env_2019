import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ProductsComponent from '../components/ProductsComponent';
import ProductViews from '../components/ProductViews';
import uuid from "uuid";
import FiltersComponent from '../components/FiltersComponent';
import moment from "moment";
import BrowserRoute from '../router/BrowserRoute';

const testProducts = [
  {
    productName:"product a",
    productPrice:45000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__imageTests.jpg",
      "./image/product__imageTests.jpg"
    ],
    type:"commuting_bike",
    productId:uuid()
  },
  {
    productName:"product b",
    productPrice:25000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__imageTests.jpg",
      "./image/product__imageTests.jpg"
    ],
    type:"bmx",
    productId:uuid()
  },
  {
    productName:"product c",
    productPrice:35000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__imageTests.jpg",
      "./image/product__imageTests.jpg"
    ],
    type:"mountain_bike",
    productId:uuid()
  },
  {
    productName:"product d",
    productPrice:85000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__imageTests.jpg",
      "./image/product__imageTests.jpg"
    ],
    productId:uuid()
  },
  {
    productName:"product e",
    productPrice:95000,
    productCover:"./image/product__imageTests.jpg",
    productListImage:[
      "./image/product__imageTests.jpg",
      "./image/product__imageTests.jpg"
    ],
    type:"bmx",
    productId:uuid()
  }
];

class PageProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: testProducts,
      searchField: "",
      productViews: false,
      filtersViews: false,
      cartProducts: [],
      cartProductsNumber: 0,
      filtersBikeTypes:undefined,
      selectedProduct:"",
      carts:[]
    }
    this.filterProductsLists = this.filterProductsLists.bind(this)
    this.activateProductViews = this.activateProductViews.bind(this)
    this.activateFiltersViews = this.activateFiltersViews.bind(this)
    this.addProductsCarts = this.addProductsCarts.bind(this)
    this.removeProductsCarts = this.removeProductsCarts.bind(this)
    this.addFilterTypes = this.addFilterTypes.bind(this)
    this.addCartObject = this.addCartObject.bind(this)
    this.updateCartNumbers = this.updateCartNumbers.bind(this)
  }
  
  // create search state string

  filterProductsLists = (ev) => {
    let productsSearch = ev.target.value;
    this.setState({searchField: productsSearch})

    console.log(productsSearch)
  }

  // activate 2nd layer product

  activateProductViews = (ev) => {
    let productDataId = ev.currentTarget.getAttribute("data-id")
    console.log(productDataId)
    this.setState((prevState) => ({
      productViews: !prevState.productViews,
      selectedProduct: productDataId
    }))
  }

  // activate filters layer

  activateFiltersViews = () => {
    this.setState((prevState) => ({filtersViews: !prevState.filtersViews}))
    // this.setState({selectProductViews: productDataId})
  }

// register products to the cart array

  addProductsCarts = (ev) => {
    console.log("addProductsCarts");
      this.state.cartProducts.push(ev.currentTarget.getAttribute("data-id"))
      this.setState({cartProductsNumber: this.state.cartProducts.length})
  }

  // remove products from cart array

  removeProductsCarts = (ev) => {
    let productId = ev.currentTarget.getAttribute("data-id")
    const carts = this.state.carts.filter((prod) => prod.id !== productId)
    this.setState({carts})
  }

  // register bike type filter value

  addFilterTypes = (ev) => {
    let filterValue = ev.target.getAttribute("data-filter");
    // ev.target.className = "active__filter";
    this.setState({filtersBikeTypes: filterValue})
  }

  // register product to cart array

  addCartObject = (ev) => {
    let object = {
      id:ev.currentTarget.getAttribute("data-id"), 
      date:moment().format("D MMM YYYY H mm"), 
      users:"user9"
    }
    this.setState((prevState) => {
      return {
        carts: [...this.state.carts, object]
      }
    })
    this.setState(() => {
      let { carts } = this.state;
      return {
          cartProductsNumber: carts.length + 1 
        }
    })
    this.updateCartNumbers();
  }

  // display the length of the cart array

  updateCartNumbers = () => {
    this.setState((prevState) => {
      let { carts } = this.state;
      if(carts.length >= 0) {
        return {
          cartProductsNumber: carts.length + 1
        }
      } else if(!carts.length) {
        return {
          cartProductsNumber: 0
        }
      }
    })
  }

  // test functionality

//   componentDidMount() {
//     console.log(uuid())
//     this.state.products.map((product) => {
//       return console.log(product.productId)
//     })
//   }  
  render() {
    const filteredProducts = this.state.products.filter(product => {
      return product.productName.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="page__products">
              <HeaderComponent 
        products={this.state.products} 
        // cartProducts={this.state.carts} 
        search={this.filterProductsLists}
        removeProductsCarts={this.removeProductsCarts}
        cartProductsNumber={this.state.cartProductsNumber}
        carts={this.state.carts}
      />
      <svg className={this.state.filtersViews ? "filters__buttonActive" : "filters__button"} onClick={this.activateFiltersViews}>
        <use href="./image/sprite.svg#icon-settings"></use>
      </svg>
      {this.state.filtersViews && <FiltersComponent addFilterTypes={this.addFilterTypes}/>}
      {/* <button onClick={this.activateFiltersViews}>filters</button> */}
      <ProductsComponent 
        addProductsCarts={this.addProductsCarts} 
        products={ filteredProducts } 
        views={this.activateProductViews}
        addCartObject={this.addCartObject}
      />
      {
        this.state.productViews 
        && 
        <ProductViews 
          closeViews={this.activateProductViews}
          selectedProduct={this.state.selectedProduct}
          products={ filteredProducts } 
        />
      }
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

export default PageProducts;
