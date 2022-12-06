import React from 'react'
import axios from 'axios'
import '../css/Products.css'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

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

        const a = this.state.products.filter((x) => x.id === 145320)
        console.log(a)
      })
  }

  render() {
    return (
      <div>
        <Grid item xs={1} className="container">
          <h1 className="Title">Products Home</h1>
        </Grid>
        {this.state.products.map((x) => (
          <Grid
            container
            columns={{ xs: 3, md: 3, xl: 3 }}
            className="productWrapper"
          >
            <Grid item columns={{ xs: 4, md: 12 }}>
              <div className="prodThumbnails">
                <img alt={x.image.label} src={x.small_image.url} />
              </div>
            </Grid>
            <Grid item columns={{ xs: 4, md: 12 }} className="productDetails">
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
                    <Link
                      to={{
                        pathname: '/details',
                        state: {
                          test: '1',
                        },
                      }}
                    >
                      <button onClick={() => this.getData({ x })}>
                        {' '}
                        Test Link{' '}
                      </button>
                    </Link>
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
            </Grid>
          </Grid>
        ))}
      </div>
    )
  }
}
