import React, { Component } from 'react';
import './App.css';
import AddCash from './components/AddCash';
import RemoveCash from './components/RemoveCash';
import ChangeCash from './components/ChangeCash';
import CashAvailable from './components/CashAvailable';
import { RegisterContext } from './contexts/RegisterContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Fast Model Cash Register</h2>
        </header>
        <RegisterContext.Consumer>
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
            marketValue,
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
                marketValue={marketValue}
                sumTotal={sumTotal}
              />
              <AddCash
                $1={$1}
                $2={$2}
                $5={$5}
                $10={$10}
                $20={$20}
                countTheCash={countTheCash}
                marketValue={marketValue}
              />
              <RemoveCash
                $1={$1}
                $2={$2}
                $5={$5}
                $10={$10}
                $20={$20}
                takeTheCash={takeTheCash}
                marketValue={marketValue}
              />
              <ChangeCash
                $1={$1}
                $2={$2}
                $5={$5}
                $10={$10}
                $20={$20}
                swapTheCash={swapTheCash}
                marketValue={marketValue}
                cashSwap={cashSwap}
              />
            </div>
          )}
        </RegisterContext.Consumer>
      </div>
    );
  }
}

export default App;
