import React, { Component } from 'react';
import './App.css';
import CashUp from './components/AddCash';
import CashDown from './components/RemoveCash';
import CashAvailable from './components/AvailableCash';
import { RegisterContext } from './contexts/RegisterContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Fast Model Cash Register</h2>
        </header>
        <div className="register-display">
          <RegisterContext.Consumer>
            <CashAvailable />
          </RegisterContext.Consumer>

          <RegisterContext.Consumer>
            <CashUp />
          </RegisterContext.Consumer>
          <CashDown />
        </div>
      </div>
    );
  }
}

export default App;
