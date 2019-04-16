import React, { Component } from 'react';
import './App.css';
import AddCash from './components/AddCash';
import RemoveCash from './components/RemoveCash';
import ChangeCash from './components/ChangeCash';
import CashAvailable from './components/CashAvailable';
import { RegisterContext } from './contexts/RegisterContext';
import Storage from './components/Storage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Fast Model Cash Register</h2>
        </header>
        <RegisterContext.Consumer>
          {({ currencyVault, total }) => (
            <div className="register-display">
              <CashAvailable currencyVault={currencyVault} />
              />
              <AddCash currencyVault={currencyVault} />
              <RemoveCash currencyVault={currencyVault} />
              <ChangeCash currencyVault={currencyVault} />
            </div>
          )}
        </RegisterContext.Consumer>
      </div>
    );
  }
}

export default App;
