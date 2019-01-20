import React, { Component } from 'react';
import './App.css';
import Row from './Row'
import Item from './Item'
import RowWithChildren from './RowWithChildren'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row />
        <RowWithChildren>
            <Item itemName = "65"/>
            <Item/>
            <Item/>
            <Item/>
        </RowWithChildren>
      </div>
    );
  }
}

export default App;
