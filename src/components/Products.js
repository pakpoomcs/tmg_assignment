import React from 'react'
import axios from 'axios'
import '../css/Products.css'
// import Button from 'react-bootstrap/Button'
import { Grid} from '@mui/material'
import { Link } from "react-router-dom";

// import ProductDetails from './ProductDetails'

// function ProductDisplay(props){
//   const [selectedProduct, setSelectedProduct] = React.useState()
// }

export default class Products extends React.Component {
  state = {
    products: [],
    currentPage: 1,
    pageSize: 20,
    product: {}
  }


  // handleLink(product){
  //   this.state.selectedProduct = product.id
  //   // this.setState(selectedProduct)
  //   console.log(product)
  // }


  changePageSize(){
    this.setState({pageSize: 30}, () => {
      console.log(this.state.pageSize)
    })

  }
  
  setProducts(input){
    localStorage.removeItem('product')
    localStorage.setItem('product', JSON.stringify(input))
    // console.log(JSON.parse(localStorage.getItem('product')))

    this.setSelectedProduct(input)

    // this.state.product = input

    console.log(this.state.product)
    
  }

  getData(aaa) {
    console.log(aaa)
  }
    

  componentDidMount() {
    document.title = this.props.title

    axios
      .get(
        `https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?currentPage=${this.state.currentPage}&pageSize=${this.state.pageSize}`
      )
      .then((res) => {
        this.setState({
          products: res.data.listProduct.items,
        })
      })
  }

  render() {
    return (
      <Grid item xs={4} className="container">
        {/* <h1 className="Title">Products Home</h1> */}
        {this.state.products.map((x) => (
          <div>
            {/* <ProductDetails product={product.id}/> */}
            <button onClick={() => this.changePageSize()}></button>
            <div className="productWrapper">
              <div className="prodThumbnails">
                <img alt={x.image.label} src={x.small_image.url} />
              </div>
              <div className="prodDetails">
                <h2>{x.brand.name}</h2>
                <br></br>
                <h4>{x.name}</h4>
                <h3 className="discountedPrice">
                  ฿{x.price_range.minimum_price.final_price.value}
                  {x.price_range.minimum_price.final_price.value !==
                  x.price_range.minimum_price.regular_price.value ? (
                    <span className="regularPrice">
                      ฿{x.price_range.minimum_price.regular_price.value}
                    </span>
                  ) : (
                    ''
                  )}
                </h3>
                {x.price_range.minimum_price.final_price.value !==
                x.price_range.minimum_price.regular_price.value ? (
                  <h4 className="discountedPrice">
                    SAVE ฿
                    {x.price_range.minimum_price.regular_price.value -
                      x.price_range.minimum_price.final_price.value}
                  </h4>
                ) : (
                  ''
                )}
                <div>
                  <nav>
                    <Link to={{
                      pathname: '/details',
                      state: {product: x}
                    }} >Learn More</Link>

                    <Link to={{
                      pathname: '/details',
                      state:{
                        test: '1'
                      }
                    }}><button onClick={() => this.getData(x)}> Test Link </button></Link>
                  </nav>
                  {/* <button
                    variant="flat"
                    size="xxl"
                    onClick={() => this.setProducts(product)}
                  >
                    See more
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Grid>
    )
  }
}
