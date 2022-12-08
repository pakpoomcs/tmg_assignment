import React from 'react'
// import axios from 'axios'
import '../css/ProductList.css'
// import { useLocation } from 'react-router-dom'
import axios from 'axios'
// import {Button} from 'react-bootstrap'

// function GetD() {
//   const location = useLocation()
//   const {selected} = location.selected
//   console.log({selected})
// }
export default class ProductList extends React.Component {
  state={
    product: {},
    maxSize: 20
  }
    
  componentDidMount() {
    axios.get(`https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?pageSize=${this.state.maxSize}`).then(res => {
      this.setState({product: res.data.listProduct.items})
      this.setState({maxSize: res.data.listProduct.total_count})
    })
    }
    
  render() {
    return (
      <div className="container_product">
        <div className="productWrapper">
              <div className="prodThumbnails">
                <img src={this.state.product[this.props.index]?.small_image?.url} alt={this.state.product[this.props.index]?.image?.label}/>
              </div>
              <div className="prodDetails">
                <h2>{this.state.product[this.props.index]?.name}</h2>
                <br></br>
                <h4>{this.state.product[this.props.index]?.name}</h4>
                <h3 className="discountedPrice">
                  ฿{this.state.product[this.props.index]?.price_range.minimum_price?.final_price?.value}
                  {this.state.product[this.props.index]?.price_range.minimum_price?.final_price?.value !==
                  this.state.product[this.props.index]?.price_range.minimum_price?.regular_price?.value ? (
                    <span className="regularPrice">
                      ฿{this.state.product[this.props.index]?.price_range.minimum_price?.regular_price?.value}
                    </span>
                  ) : (
                    ''
                  )}
                </h3>
                {this.state.product[this.props.index]?.price_range.minimum_price?.final_price?.value !==
                this.state.product[this.props.index]?.price_range.minimum_price?.regular_price?.value ? (
                  <h4 className="discountedPrice">
                    SAVE ฿
                    {this.state.product[this.props.index]?.price_range.minimum_price?.regular_price?.value -
                      this.state.product[this.props.index]?.price_range.minimum_price?.final_price?.value}
                  </h4>
                ) : (
                  ''
                )}
              </div>
            </div>
      </div>
    )
  }
}
