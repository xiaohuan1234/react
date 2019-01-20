import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import './Card.css';

class Card extends Component {
  render(){
  const {selected, productList} = this.props;
  const product = productList[selected];
  return <div className="carousel-card">
                <div className="photo" style={{
                backgroundImage: `url(${product.imageURL})`,
                backgroundSize: product.backgroundSize}}></div>
                <div className="text" style={{
                  backgroundColor: product.backgroundColor,
                }}>
                    <div className="price"><span>{product.price}</span> USD</div>
                    <div className="brand">{product.brand}</div>
                    <div className="name">{product.name}</div>
                    <div className="color">Color: &nbsp;<span>{product.color}</span></div>                    
                    <div className="card-buttons">
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                    </div>
                 </div>
    </div>;
  }
}

var mapStateToProps = (reduxState) => {
  return {
    ...reduxState
  };
};
export default connect(mapStateToProps)(Card);
