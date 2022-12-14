import React from 'react'
// import axios from 'axios'
import '../css/Products.css'
import 'bootstrap/dist/css/bootstrap.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import mockupData from '../data/mockupData'

export default class Products extends React.Component {
  state = {
    products: [],
    currentPage: 1,
    product: {},
    selected: 0,
    maxSize: 20,
    currRange: 0,
  }

  changePageSize() {
    const newSize = document.getElementById("enteredPageSize").value !== "" ? document.getElementById("enteredPageSize").value:this.state.maxSize

    // axios
    // .get(
    //   `https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?currentPage=${this.state.currentPage}&pageSize=${newSize}`
    // )
    // .then((res) => {
    //   this.setState({
    //     products: res.data.listProduct.items,
    //   })
    // })

    this.setState({products: mockupData.listProduct.items.slice(0,parseInt(newSize))})
  }

  componentDidMount() {
    // axios
    //   .get(
    //     `https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?currentPage=${this.state.currentPage}&pageSize=${this.state.maxSize}`
    //   )
    //   .then((res) => {
    //     this.setState({products: res.data.listProduct.items})
    //     this.setState({maxSize: res.data.listProduct.total_count})
    //   })

      this.setState({products: mockupData.listProduct.items})
      this.setState({maxSize: mockupData.listProduct.total_count})
  }

  getSliderValue(){
    let x = document.getElementById('enteredPageSize').value
    this.setState({ currRange: x })
  }

  getID(x) {
    this.setState({ selected: x })
    this.props.title(this.state.products[x]?.name)
    this.props.handleClick(x)
  }

  convertTHB(price) {
    if (typeof price === 'number') {
      let len = price.toString().length
      let arrayNum = []
      let loopCount = 0
      let numText = ''
      switch (true) {
        case len >= 4:
          for (var i = len - 1; i >= 0; i--) {
            loopCount++
            arrayNum.push(price.toString()[i])
            if (loopCount % 3 === 0 && loopCount >= 3) {
              arrayNum.push(',')
            }
            loopCount = loopCount % 3 === 0 ? 0 : loopCount
          }

          if (arrayNum.slice(-1)[0] === ',') {
            arrayNum.pop()
          }

          for (var k = arrayNum.length - 1; k >= 0; k--) {
            numText += arrayNum[k]
          }

          return numText
        default:
          return price
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Container id="GridContainer">
          <div className="Header">
            <h1>Product List</h1>
            <p>Adjust displaying amount with this slider</p>

          </div>
        <div className="SliderContainer">
          <label>Page Size</label>
          <div className="Slider">
            {<input step="5" onChange={()=> this.getSliderValue()} id="enteredPageSize" type="range" min="0" max={this.state.maxSize}></input>}
          </div>
          <div className="currRange">
            {this.state.currRange}
          </div>
          <Button onClick={()=> this.changePageSize()}>Show</Button>
        </div>
        <Row>
          {this.state.products.map((x, index) => (
            <Col className="Columns" key={index} >
                <Link to="/details">
                  <div
                    onClick={() => {
                      this.getID(index)
                    }}
                    className="ProductWrapper"
                  >
                    <div className="imgComp">
                      <img alt={x.image.label} src={x.image.url} />
                      {
                        x.price_range.minimum_price.final_price.value !== x.price_range.minimum_price.regular_price.value ? (
                          <div className="cornerimage"><p>Save {x.price_range.minimum_price.discount.percent_off}%</p></div>

                        ):''
                      }
                      
                    </div>
                    <hr width="100%" />
                    <h1 className="brand">{x.brand.name}</h1>
                    <h3 className="productName">{x.name}</h3>
                    <br></br>
                    {
                      (x.price_range.minimum_price.final_price.value !== x.price_range.minimum_price.regular_price.value) ?
                      (<h3 className="discountedPrice">
                      ฿
                      {this.convertTHB(
                        x.price_range.minimum_price.final_price.value
                      )}
                      &nbsp;
                      <span className="originalPrice">
                        ฿
                        {this.convertTHB(
                          x.price_range.minimum_price.regular_price.value
                        )}
                      </span>
                    </h3>) : 
                      (<h3 className="discountedPrice">
                      <span className="originalPrice_noDiscount">
                        ฿
                        {this.convertTHB(
                          x.price_range.minimum_price.regular_price.value
                        )}
                      </span>
                    </h3>)

                    }



                    <p className="review">Be the first to review</p>
                    <button className="addToCartBtn">
                      <AddShoppingCartIcon />
                    </button>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}
