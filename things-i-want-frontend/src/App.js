import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import OptionsBanner from './OptionsBanner';
import TopBanner from './TopBanner';
import ProductView from './ProductView';
import WebFont from 'webfontloader';
import { connect } from 'react-redux';
import { getProducts, handleDelete } from './actionCreators';

WebFont.load({
  google: {
    families: ['Montserrat:200,300,400,500,700', 'sans-serif']
  }
});

class App extends Component {
  constructor(props){
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete (id) {
    console.log("app's onDelete with id=", id);
    this.props.handleDelete(id);
  }
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div className="App">
        <TopBanner/>
        <OptionsBanner/>
        <ProductView products = {this.props.products} onDelete = {this.onDelete}/>
      </div>
    );
  }
}

var mapStateToProps = (reduxState) =>{
  return {
    ...reduxState
  };
};
export default connect(mapStateToProps, {getProducts, handleDelete})(App);
