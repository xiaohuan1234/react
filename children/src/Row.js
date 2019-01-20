import React, { Component } from 'react';
import Item from './Item'
import './Row.css';

class Row extends Component {
  render() {
    return (
        
          <div className="Row">
            <Item itemName = "Xiaohuan" />
            <Item />
            <Item />
          </div>
        
    );
  }
}

export default Row;