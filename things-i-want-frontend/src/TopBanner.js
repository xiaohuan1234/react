import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './TopBanner.css';

class TopBanner extends Component {
  render() {
    return (
      <div className="top-banner">
        <span className="title">Things I Want</span>
        <button id="add-button">Add</button>
      </div>
    );
  }
}

export default TopBanner;
