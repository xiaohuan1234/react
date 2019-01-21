import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './ProductView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// eslint-disable-line no-unused-vars
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class ProductView extends Component {
    
  render() {
    const { products }= this.props;
    const productList = products.map((p, index)=>(
        <div key={index} className="product-item">
            <li>{p.name}</li>
            <button onClick={this.props.onDelete.bind(this, index)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>));
    return (
      <ul className="product-view">
        {productList}
      </ul>
    );
  }
}

export default ProductView;
