import * as React from 'react';
import AppBar from 'material-ui/AppBar';

import './App.css';
const logo = require('./logo.svg');

import { MyComp } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar title="My AppBar" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyComp />
      </div>
    );
  }
}

export default App;
