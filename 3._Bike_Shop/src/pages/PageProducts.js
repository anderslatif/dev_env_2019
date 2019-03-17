import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ProductsComponent from '../components/ProductsComponent';
import ProductViews from '../components/ProductViews';
import uuid from "uuid";
import FiltersComponent from '../components/FiltersComponent';
import moment from "moment";
import axios from 'axios';
// import BrowserRoute from '../router/BrowserRoute';

const testProducts = [
  {
    productName:"product a",
    productPrice:45000,
    productCover:"./image/productpictures/cover1.jpg",
    productListImage:[
      "./image/productpictures/product1a.png",
      "./image/productpictures/product1b.png"
    ],
    type:"commuting_bike",
    productId:uuid()
  },
  {
    productName:"product b",
    productPrice:25000,
    productCover:"./image/productpictures/cover2.jpg",
    productListImage:[
      "./image/productpictures/product2a.png",
      "./image/productpictures/product2b.png"
    ],
    type:"bmx",
    productId:uuid()
  },
  {
    productName:"product c",
    productPrice:35000,
    productCover:"./image/productpictures/cover3.jpg",
    productListImage:[
      "./image/productpictures/product3a.jpg",
      "./image/productpictures/product3b.jpg"
    ],
    type:"mountain_bike",
    productId:uuid()
  },
  {
    productName:"product d",
    productPrice:85000,
    productCover:"./image/productpictures/cover4.jpg",
    productListImage:[
      "./image/productpictures/product4a.png",
      "./image/productpictures/product4b.jpg"
    ],
    productId:uuid()
  },
  {
    productName:"product e",
    productPrice:95000,
    productCover:"./image/productpictures/cover5.jpg",
    productListImage:[
      "./image/productpictures/product5a.jpg",
      "./image/productpictures/product5b.jpg"
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
      selectedProduct:"",
      carts:[],
      filtersBikeTypes:undefined,
      customerInformation:{},
      priceRange: {min: 0, max: 0},
      sortType:"ascending"
  }
    this.filterProductsLists = this.filterProductsLists.bind(this)
    this.activateProductViews = this.activateProductViews.bind(this)
    this.activateFiltersViews = this.activateFiltersViews.bind(this)
    this.addProductsCarts = this.addProductsCarts.bind(this)
    this.removeProductsCarts = this.removeProductsCarts.bind(this)
    this.addFilterTypes = this.addFilterTypes.bind(this)
    this.addCartObject = this.addCartObject.bind(this)
    this.updateCartNumbers = this.updateCartNumbers.bind(this)
    this.setPriceRange = this.setPriceRange.bind(this);
    this.setSortMainProducts = this.setSortMainProducts.bind(this);
    // this.setPriceFilters = this.setPriceFilters.bind(this)
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

  setPriceRange = (ev) => {
    if(ev.target.getAttribute("name") === "minPrice") {
      console.log(Number(ev.target.value))
      let minValue = ev.target.value;
      this.setState((prevState) => ({
        priceRange: {
          ...prevState.priceRange,
          min: minValue
        }
      }))
    } else if (ev.target.getAttribute("name") === "maxPrice") {
      console.log(Number(ev.target.value))
      let maxValue = ev.target.value;
      this.setState((prevState) => ({
        priceRange: {
          ...prevState.priceRange,
          max: maxValue
        }
      }))
    }
    // else if(ev.target.name === "maxPrice") {
    //   this.setState(() => {
    //     return {
    //       priceRange:max: ev.target.value
    //     } 
    //   })
    // }
  }

  setSortMainProducts = (ev) => {
    let sortType = ev.target.value;
    this.setState({sortType})
  }

  // setPriceFilters = (ev) => {
  //   let valuePrice = ev.targe.value;
  //   this.setState({valuePrice})
  // }

  // test functionality

//   componentDidMount() {
//     console.log(uuid())
//     this.state.products.map((product) => {
//       return console.log(product.productId)
//     })
//   }  
  componentDidMount() {
    axios.get('http://localhost:8080/bicycles')
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });  
    // fetch("http://localhost:8080/bicycles")
    // .then(res => res.json())
    // .then(datas => console.log(datas))
  }
  render() {
    const filteredProducts = this.state.products.filter(product => {
      return product.productName.toLowerCase().includes(this.state.searchField.toLowerCase())
    }).sort((a, b) => {
      if(this.state.sortType === "ascending") {
        return a.productPrice - b.productPrice;
      } else if(this.state.sortType === "descending") {
        return b.productPrice - a.productPrice;
      }
    });
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

      {
        this.state.filtersViews 
        && 
        <FiltersComponent 
          addFilterTypes={this.addFilterTypes}
          setPriceRange={this.setPriceRange}
          setSortMainProducts={this.setSortMainProducts}
        />
      }

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
