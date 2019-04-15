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
        <div className="register-display">
          <Storage
            render={({ load, save, remove }) => (
              <RegisterContext.Consumer>
                {({ currencyVault, total }) => (
                  <CashAvailable
                    currencyVault={currencyVault}
                    total={total}
                    load={load}
                    save={save}
                    remove={remove}
                  />
                )}
              </RegisterContext.Consumer>
            )}
          />
          <RegisterContext.Consumer>
            {({ currencyVault }) => (
              <AddCash currencyVault={currencyVault} key={currencyVault.id} />
            )}
          </RegisterContext.Consumer>

          <RegisterContext.Consumer>
            {({ currencyVault }) => (
              <RemoveCash currencyVault={currencyVault} />
            )}
          </RegisterContext.Consumer>
          <RegisterContext.Consumer>
            {({ currencyVault }) => (
              <ChangeCash currencyVault={currencyVault} />
            )}
          </RegisterContext.Consumer>
        </div>
      </div>
    );
  }
}

export default App;
