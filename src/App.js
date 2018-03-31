import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Apoorva Saxena</h1>
          <div>
            <span>About  </span>
            <span>CV  </span>
            <span>Github Projects  </span>
            <span>LinkedIN  </span>
          </div>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
