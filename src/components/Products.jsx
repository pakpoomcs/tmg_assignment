import React from 'react'
import axios from 'axios'
import '../css/Products.css'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';


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
        <h4>React-Bootstrap Container Component</h4>
        <Row>
        <Col style={{
          backgroundColor: 'red',
        }}>
          Sample First Col
      </Col>
        <Col style={{
          backgroundColor: 'yellow',
        }}>
          Sample Second Col
      </Col>
        <Col style={{
          backgroundColor: 'green',
        }}>
          Sample Third Col
      </Col>
      <Col style={{
          backgroundColor: 'blue',
        }}>
          Sample Forth Col
      </Col>

      </Row>

        <Container  id="GridContainer">
        <Row>

          {this.state.products.map((x, index) => (
                <Col>
                <div className="ProductWrapper">
                  <img alt={x.image.label} src={x.image.url} />
                  <h1 className="brand">{x.brand.name}</h1>
                  <h3 className="productName">{x.name}</h3>
                  <br></br>
                  <h2 className="discountedPrice">
                    {x.price_range.minimum_price.final_price.value}
                  </h2>
                  <h2 className="originalPrice">{x.price_range.minimum_price.regular_price.value}</h2>
                </div>
                </Col>
          ))}
        </Row>

      </Container>
      </div>
    )
  }
}
