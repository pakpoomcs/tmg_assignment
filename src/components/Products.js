import React from 'react'
import axios from 'axios'
import '../css/Products.css'
import { Grid } from '@mui/material'

// import ProductDetails from './ProductDetails'

// function ProductDisplay(props){
//   const [selectedProduct, setSelectedProduct] = React.useState()
// }

export default class Products extends React.Component {
  state = {
    products: [],
    currentPage: 1,
    pageSize: 20,
    product: {},
  }

  // handleLink(product){
  //   this.state.selectedProduct = product.id
  //   // this.setState(selectedProduct)
  //   console.log(product)
  // }

  changePageSize() {
    this.setState({ pageSize: 30 }, () => {
      console.log(this.state.pageSize)
    })
  }

  setProducts(input) {
    localStorage.removeItem('product')
    localStorage.setItem('product', JSON.stringify(input))
    // console.log(JSON.parse(localStorage.getItem('product')))

    this.setSelectedProduct(input)

    // this.state.product = input

    console.log(this.state.product)
  }

  getData(x) {
    console.log(x.x.id)
    this.setState({
      product: 145320,
    })
    console.log(this.state.product)
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
      <div className="container">
        <Grid item xs={1}>
          <h1 className="Title">Products Home</h1>
        </Grid>{' '}
        <Grid id="GridContainer" container spacing={1}>
          {this.state.products.map((x) => (
            <div id="productWrapper">
              <Grid item xs={3}>
                <div className="divcontainer">
                  <img src={x.image.url} />
                  <h1 id="brand">{x.brand.name}</h1>
                  <h3 id="productName">{x.name}</h3>
                  <br></br>
                  <h1 id="discountedPrice">
                    {x.price_range.minimum_price.final_price.value}
                  </h1>
                  <h1>{x.price_range.minimum_price.regular_price.value}</h1>
                </div>
              </Grid>
            </div>
          ))}
        </Grid>
      </div>
    )
  }
}
