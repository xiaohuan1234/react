import React, { Component } from 'react';
import './Item.css';
import PropTypes from 'prop-types'

class Item extends Component {
  static defaultProps = {
    itemName: "An Item"
  };
  static propTypes = {
    itemName: PropTypes.string
  }
  render() {
    var {itemName} = this.props;
    itemName += "!!"
    return (
      <span className="Item">
        I'm {itemName}
      </span>
    );
  }
}

export default Item;