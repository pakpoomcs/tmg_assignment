import React from 'react'
import axios from 'axios'
import '../css/ProductList.css'
export default class ProductList extends React.Component {
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
        const products = res.data.listProduct.items
        this.setState({ products })
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Products</h1>
        <ul>
          {this.state.products.map((x) => (
            <div className="productWrapper">
              <li>
                <div className="prodThumbnails">
                  <img alt={x.image.label} src={x.small_image.url} />
                </div>
                <div className="prodDetails">
                  <h3>{x.brand.name}</h3>
                  <h4>{x.name}</h4>
                  <h3 className="discountedPrice">
                    ฿{x.price_range.minimum_price.final_price.value}
                  </h3>
                  <h3 className="regularPrice">
                    ฿{x.price_range.minimum_price.regular_price.value}
                  </h3>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}
