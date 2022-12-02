import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
      products: []
    }
  
    componentDidMount() {
      axios.get(`https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?currentPage=1&pageSize=200`)
        .then(res => {
          const products = res.data.listProduct.items;
          this.setState({ products });
        })
    }
  
    render() {
      return (
        <ul>
          {
            this.state.products
              .map(x =>
                
                <li key={x.id}>{x.name}
                <img class="prodThumbnails" alt={x.image.label} src={x.small_image.url}></img></li>
              )
          }
        </ul>
      )
    }
  }
  