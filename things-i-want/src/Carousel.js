import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// eslint-disable-line no-unused-vars
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

library.add(faChevronLeft);
library.add(faChevronRight);

class Carousel extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        console.log("clicked");
        e.preventDefault();
        this.props.handleClick();
    }
    render(){
        console.log(this.props);
        return <div className="carousel-control" id={this.props.next?"right":"left"}>
                    <button onClick={this.handleClick}>
                        <FontAwesomeIcon icon={this.props.next?faChevronRight:faChevronLeft}/>
                    </button>
                </div>;
    }
}

var mapStateToProps = (reduxState) => {
  return {
    ...reduxState
  };
};
export default connect(mapStateToProps)(Carousel);
