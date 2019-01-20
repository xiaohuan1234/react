import React, { Component } from 'react';
import Item from './Item'
import './RowWithChildren.css';

class RowWithChildren extends Component {
  render() {
    return (
        
            <div className="Row-with-children">
                {this.props.children}
            </div>
      
    );
  }
}

export default RowWithChildren;