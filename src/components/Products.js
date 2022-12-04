import React from 'react'
import axios from 'axios'
import '../css/Products.css'
import Button from 'react-bootstrap/Button'
import { Grid } from '@mui/material'

export default class Products extends React.Component {
  state = {
    products: [],
    currentPage: 1,
    pageSize: 20,
  }

  componentDidMount() {
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

  getPath(product) {
    // console.log({ product })
    console.log('hi')
  }
  render() {
    return (
      <Grid item xs={4} className="container">
        {/* <h1 className="Title">Products Home</h1> */}
        {this.state.products.map((product) => (
          <div>
            <div className="productWrapper" onClick={this.getPath(product.id)}>
              <div className="prodThumbnails">
                <img alt={product.image.label} src={product.small_image.url} />
              </div>
              <div className="prodDetails">
                <h2>{product.brand.name}</h2>
                <br></br>
                <h4>{product.name}</h4>
                <h3 className="discountedPrice">
                  ฿{product.price_range.minimum_price.final_price.value}
                  {product.price_range.minimum_price.final_price.value !==
                  product.price_range.minimum_price.regular_price.value ? (
                    <span className="regularPrice">
                      ฿{product.price_range.minimum_price.regular_price.value}
                    </span>
                  ) : (
                    ''
                  )}
                </h3>
                {product.price_range.minimum_price.final_price.value !==
                product.price_range.minimum_price.regular_price.value ? (
                  <h4 className="discountedPrice">
                    SAVE ฿
                    {product.price_range.minimum_price.regular_price.value -
                      product.price_range.minimum_price.final_price.value}
                  </h4>
                ) : (
                  ''
                )}
                <div>
                  <Button
                    variant="flat"
                    size="xxl"
                    onClick={this.getPath(product.id)}
                  >
                    See more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Grid>
    )
  }
}
