import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import ProductsComponent from './components/ProductsComponent';
import ProductViews from './components/ProductViews';
import uuid from "uuid";
import FiltersComponent from './components/FiltersComponent';
import moment from "moment";
import BrowserRoute from './router/BrowserRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRoute></BrowserRoute>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
