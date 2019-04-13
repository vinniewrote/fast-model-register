import React, { Component } from 'react';
import './App.css';
import CashUp from './components/AddCash';
import CashDown from './components/RemoveCash';
import CashAvailable from './components/AvailableCash';
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
                {({ $1, $2, $5, $10, $20, total }) => (
                  <CashAvailable
                    $1={$1}
                    $2={$2}
                    $5={$5}
                    $10={$10}
                    $20={$20}
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
            {({ checkVals }) => <CashUp checkVals={checkVals} />}
          </RegisterContext.Consumer>
          <CashDown />
        </div>
      </div>
    );
  }
}

export default App;
