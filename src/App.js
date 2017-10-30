// This will be the src index of react project
import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Hello to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
              {/* Display children component */}
              {this.props.children}
            </p>
          </div>
      </div>
    );
  }
}

export default App;