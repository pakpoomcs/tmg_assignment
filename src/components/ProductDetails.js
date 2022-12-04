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

  getBreadcrumb(main_category_en) {
    if (typeof main_category_en.level == 'number') {
      let breadcrumb = []
      for (let i = 0; i < main_category_en.level - 2; i++) {
        breadcrumb.push(main_category_en.breadcrumbs[i].category_name)
      }
      breadcrumb.unshift('Home')
      return breadcrumb.join(',').replaceAll(',', ' > ')
    }
    return null
  }

  render() {
    return (
      <div className="container">
        <h1>Products Details</h1>
        {this.state.products.map((x) => (
          <div>
            <div className="breadcrumb">
              {this.getBreadcrumb(x.main_category_en)}
            </div>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
