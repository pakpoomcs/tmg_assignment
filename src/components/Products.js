import React from 'react'
import axios from 'axios'
import '../css/Products.css'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default class Products extends React.Component {
  state = {
    products: [],
    currentPage: 1,
    product: {},
    selected: 0,
    maxSize:20,
    currRange: 0
  }

  changePageSize() {
    const newSize = document.getElementById("enteredPageSize").value !== "" ? document.getElementById("enteredPageSize").value:this.state.maxSize

    axios
    .get(
      `https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?currentPage=${this.state.currentPage}&pageSize=${newSize}`
    )
    .then((res) => {
      this.setState({
        products: res.data.listProduct.items,
      })
    })

  }

  componentDidMount() {
    // document.title = this.props.title

    axios
      .get(
        `https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?currentPage=${this.state.currentPage}&pageSize=${this.state.maxSize}`
      )
      .then((res) => {
        this.setState({
          products: res.data.listProduct.items,
        })
        this.setState({maxSize: res.data.listProduct.total_count})
      })
  }

  getSliderValue(){
    let x = document.getElementById('pageSizeRange').value
    console.log(x)
    this.setState({currRange: x})
    // return <div>{x}</div>
  }

  getID(x){
    this.setState({selected: x})
    this.props.title(this.state.products[x]?.name)
    this.props.handleClick(x)
   }

  render() {
    return (
      <div className="container">

        <Row>
          <Col xs={1}>
            <label>Page Size</label>
          </Col>
          <Col xs={3}>
        {this.state.currRange}
        {/* <input step="5" onChange={()=> this.getSliderValue()} id="pageSizeRange" type="range" min="0" max={this.state.maxSize}></input> */}
            <input className='enteredPageSize' type="number" placeholder="page size" id="enteredPageSize"></input>
          </Col>
          <Col xs={1}>
        <Button onClick={()=> this.changePageSize()}>Show</Button>
          </Col>
        </Row>
        {/* <Link to={{pathname:"/details",state: {selected: this.state.selected}}}>GO</Link> */}
        <Container id="GridContainer">
        <Row>
          {this.state.products.map((x, index) => (
            <Col className="Columns" key={x.id} >
                <Link to="/details">
                <div onClick={() => {this.getID(index)}} className="ProductWrapper">
                  <img alt={x.image.label} src={x.image.url} />
                  <hr width='100%'/>
                  <h1 className="brand">{x.brand.name}</h1>
                  <h3 className="productName">{x.name}</h3>
                  <br></br>
                  <h3 className="discountedPrice">
                  ฿{x.price_range.minimum_price.final_price.value}&nbsp;
                  <span className="originalPrice">
                    ฿{x.price_range.minimum_price.regular_price.value}
                  </span>
                  </h3>
                  <p className='review'>Be the first to review</p>
                  <button className="addToCartBtn"><AddShoppingCartIcon/></button>
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
