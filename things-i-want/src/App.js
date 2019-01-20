import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Card from './Card';
import Carousel from './Carousel';         
import {handleNext, handlePrevious} from './actionCreators';
import './App.css';

class App extends Component {
    
  render() {
      console.log("rendering app with props:", this.props);
    return (
      <div className="App">
        <header className="title-banner">
            <div className="title-content">THINGS&nbsp;I&nbsp;WANT</div>
        </header>
        <div className="main">
            <Carousel next={false} handleClick={handlePrevious}/>
            <Card />
            <Carousel next={true} handleClick={handleNext}/>
        </div>
        <button id="add-product-btn"><i className="fas fa-plus"></i></button>
      </div>
    );
  }
}

var mapStateToProps = (reduxState) => {
  return {
    ...reduxState
  };
};

export default connect(mapStateToProps,{handleNext, handlePrevious})(App);
