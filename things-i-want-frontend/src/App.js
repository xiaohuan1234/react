import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import OptionsBanner from './OptionsBanner';
import TopBanner from './TopBanner';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:200,300,400,500,700', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBanner/>
        <OptionsBanner/>
      </div>
    );
  }
}

export default App;
