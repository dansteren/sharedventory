import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import './App.css';
import { theme } from './theme';
const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="App">
          <AppBar title="My AppBar" />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
