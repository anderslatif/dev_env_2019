import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import Slider from "react-slick";
// import Carousel from 'nuka-carousel';

class ProductViews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaderState: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
       this.setState((prevState) => ({loaderState: !prevState.loaderState}))  
    }, 200)
  }
  render(props) {
    let { products, selectedProduct } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      easing:"linear",
      autoplay:true
    };
    return (
      <div className="product__views">
        <div className="product__views--wrapper">
            <svg className="close__views" onClick={this.props.closeViews}>
                <use href="./image/sprite.svg#icon-cross"></use>
            </svg>
            {
              this.state.loaderState 
              &&
              <div className="loader__products">
                <Loader type="ThreeDots" color="#somecolor" height={32} width={32} />
              </div>
            }
            <div className="inner__contentWrapper">
              <div className="inner__contentWrapper--image">
                {/* <Carousel> */}
                <Slider {...settings}>
                  {
                    products.map((images) => {
                      if(images.productId === selectedProduct) {
                        return images.productListImage.map((image, index) => {
                          return <div className="image__contain"><img src={image} alt="" key={index}/></div>
                        })
                      }
                    })
                  }
                  </Slider>
                {/* </Carousel> */}
              </div>
              <div className="inner__contentWrapper--controllers">
                  {
                    products.map((datas) => {
                      if(datas.productId === selectedProduct) {
                        return(
                          <div className="datas__wrapper" key={datas.productId}>
                            <div className="datas__wrapper--title">
                              <h2>{datas.productName}</h2>
                            </div>
                            <div className="datas__wrapper--price">
                              <p>${datas.productPrice}</p>
                            </div>
                            <div className="datas__wrapper--datapicker">
                              will insert airbnb data-range picker
                            </div>
                            <div className="datas__wrapper--addToCart">
                              <button>add to cart</button>
                            </div>
                          </div>
                        );
                      }
                    })
                  }
              </div>
            </div>
        </div>
        {/* ProductViews */}
      </div>
    )
  }
}

export default ProductViews;