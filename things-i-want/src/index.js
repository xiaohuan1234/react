import React from 'react';// eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WebFont from 'webfontloader';
import rootReducer from './rootReducer';
import './index.css';
import App from './App';

WebFont.load({
  google: {
    families: ['Montserrat:200,300,400,700', 'sans-serif']
  }
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));