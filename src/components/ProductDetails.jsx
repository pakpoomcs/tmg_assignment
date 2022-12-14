import React from 'react'
import '../css/ProductList.css'
// import axios from 'axios'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import mockupData from '../data/mockupData';

export default class ProductList extends React.Component {
  state={
    product: {},
    maxSize: 20,
    selectedImage: "",
  }
    
  componentDidMount() {
    document.title = this.props.title
    // axios.get(`https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?pageSize=${this.state.maxSize}`).then(res => {
    //   this.setState({product: mockupData.listProduct.items})
    //   this.setState({maxSize: mockupData.listProduct.total_count})
    //   this.setState({selectedImage: mockupData.listProduct.items[this.props.index].image.url})
    // })

    this.setState({product: mockupData.listProduct.items})
    this.setState({maxSize: mockupData.listProduct.total_count})
    this.setState({selectedImage: mockupData.listProduct.items[this.props.index].image.url})

  }

  setImage(url){
    this.setState({selectedImage: url})
  }

  breadcrumbing(){
    return this.state.product[this.props.index]?.main_category_en.url_path != null ? <div className="BreadCrumb">
      <a href="/">HOME > {(this.state.product[this.props.index]?.main_category_en.url_path).replaceAll("/", " > ").toUpperCase()}
      </a></div>  :('')
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
      <div className="container_product">
        {this.breadcrumbing()}
        <div className="productWrapper">
              <div className="prodThumbnails">
                <div className="mainThumbnail">
                  <img src={this.state.selectedImage} alt={this.state.product[this.props.index]?.image?.label}/>
                </div>
                  {
                    this.state.product[this.props.index]?.second_image?.url !== "" ? 
                    (<div className="secondaryThumbnail">
                      <img onClick={()=>{this.setImage(this.state.product[this.props.index].small_image.url)}} src={this.state.product[this.props.index]?.small_image?.url} alt={this.state.product[this.props.index]?.image?.label}/>
                      <img onClick={()=>{this.setImage(this.state.product[this.props.index].second_image.url)}} src={this.state.product[this.props.index]?.second_image?.url} alt={this.state.product[this.props.index]?.image?.label}/>
                      </div>) : ''
                  }
                  
              </div>
              <div className="prodDetails">
                <h1>{this.state.product[this.props.index]?.brand.name}</h1>
                <br></br>
                <h4>{this.state.product[this.props.index]?.name}</h4>
                <p className="prodDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio neque fugiat, atque consectetur odio saepe quod, error ipsam vero maxime, recusandae voluptas! Est quae ipsa eos, at debitis rem nihil.</p>
                <h3 className="discountedPrice">
                  {this.state.product[this.props.index]?.price_range.minimum_price?.final_price?.value !== null ? 
                   '฿'+this.convertTHB(this.state.product[this.props.index]?.price_range.minimum_price.final_price.value) : ''}
                  {this.state.product[this.props.index]?.price_range.minimum_price?.final_price?.value !==
                  this.state.product[this.props.index]?.price_range.minimum_price?.regular_price?.value ? (
                    <span className="regularPrice">
                      ฿{this.convertTHB(this.state.product[this.props.index]?.price_range.minimum_price?.regular_price?.value)}
                    </span>
                  ) : (
                    ''
                  )}
                </h3>
                {this.state.product[this.props.index]?.price_range.minimum_price?.final_price?.value !==
                this.state.product[this.props.index]?.price_range.minimum_price?.regular_price?.value ? (
                  <h4 className="savingAmount">
                    SAVE ฿
                    {this.convertTHB(this.state.product[this.props.index]?.price_range.minimum_price?.regular_price?.value -
                      this.state.product[this.props.index]?.price_range.minimum_price?.final_price?.value)}
                  </h4>
                ) : (
                  ''
                  )}
                  <p className="options">
                  <span>Be the first to review</span>
                  <span>Add to Compare</span>
                  <span>Save to Wishlist</span>
                    </p>


                  <button className="addToCartBtn"><AddShoppingCartIcon/></button>
              </div>
            </div>
      </div>
    )
  }
}
