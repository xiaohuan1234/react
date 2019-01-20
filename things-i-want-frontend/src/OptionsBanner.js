import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './OptionsBanner.css';

class OptionsBanner extends Component {
  render() {
    return (
      <ul className="options-banner">
      <li>sort by</li>
      <li>filter by</li>
      <li>view style</li>
      <li>30 results</li>
      </ul>
    );
  }
}

export default OptionsBanner;
