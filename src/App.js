import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Cart from './components/cart';

class App extends Component {
  render() {
    return (
      <div className="container-fluid app-container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Menu/>
          </div>
          <div className="col-xs-12 col-md-6">
            <Cart/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
