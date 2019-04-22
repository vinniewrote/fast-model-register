import React, { Component } from 'react';
import './App.css';
import AddCash from './components/AddCash';
import RemoveCash from './components/RemoveCash';
import ChangeCash from './components/ChangeCash';
import CashAvailable from './components/CashAvailable';
import { CashRegisterContext } from './contexts/CashRegister';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Fast Model Cash Register</h2>
        </header>
        <CashRegisterContext.Consumer>
          {({
            $1,
            $2,
            $5,
            $10,
            $20,
            emptyRegister,
            exampleRegister,
            sumTotal,
            countTheCash,
            cashValue,
            takeTheCash,
            swapTheCash,
            cashSwap,
          }) => (
            <div className="register-display">
              <CashAvailable
                $1={$1}
                $2={$2}
                $5={$5}
                $10={$10}
                $20={$20}
                emptyRegister={emptyRegister}
                exampleRegister={exampleRegister}
                cashValue={cashValue}
                sumTotal={sumTotal}
              />
              <AddCash
                $1={$1}
                $2={$2}
                $5={$5}
                $10={$10}
                $20={$20}
                countTheCash={countTheCash}
                cashValue={cashValue}
              />
              <RemoveCash
                $1={$1}
                $2={$2}
                $5={$5}
                $10={$10}
                $20={$20}
                takeTheCash={takeTheCash}
                cashValue={cashValue}
              />
              <ChangeCash
                $1={$1}
                $2={$2}
                $5={$5}
                $10={$10}
                $20={$20}
                swapTheCash={swapTheCash}
                cashValue={cashValue}
                cashSwap={cashSwap}
              />
            </div>
          )}
        </CashRegisterContext.Consumer>
      </div>
    );
  }
}

export default App;
