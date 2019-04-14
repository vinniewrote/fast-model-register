import React, { Component } from 'react';
import './App.css';
import AddCash from './components/AddCash';
import RemoveCash from './components/RemoveCash';
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
            {({ currencyVault }) => <AddCash currencyVault={currencyVault} />}
          </RegisterContext.Consumer>

          {/* <RemoveCash /> */}
        </div>
      </div>
    );
  }
}

export default App;
