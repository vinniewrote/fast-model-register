import React, { createContext, Component } from 'react';
import propTypes from 'prop-types';

export const CashRegisterContext = createContext();

export class CashRegister extends Component {
  static propTypes = {
    children: propTypes.object,
  };

  state = {
    $1: 10,
    $2: 5,
    $5: 5,
    $10: 5,
    $20: 10,
    cashSwap: [],
  };

  emptyRegister = () => {
    this.setState({
      $1: 0,
      $2: 0,
      $5: 0,
      $10: 0,
      $20: 0,
      sumTotal: 0,
    });
  };

  exampleRegister = () => {
    this.setState({
      $1: 10,
      $2: 5,
      $5: 5,
      $10: 5,
      $20: 5,
      sumTotal: 195,
    });
  };

  cashValue = () => {
    const { $1, $2, $5, $10, $20 } = this.state;
    const sumValue = $1 * 1 + $2 * 2 + $5 * 5 + $10 * 10 + $20 * 20;
    this.setState({
      sumTotal: sumValue,
    });
  };

  countTheCash = e => {
    const name = e.target.name;
    const value = Number(e.target.value);
    const previousCount = this.state[name];
    if (isNaN(value) || value === 0) {
      alert('sorry, there is nothing to add. check the value entered');
      e.target.value = '';
      this.setState({
        [name]: previousCount,
      });
    } else {
      const newCount = previousCount + value;
      this.setState({
        [name]: newCount,
      });
    }
  };

  takeTheCash = e => {
    const name = e.target.name;
    const value = Number(e.target.value);
    const prevDiffCount = this.state[name];
    const diffCount = prevDiffCount - value;
    if (diffCount <= 0) {
      alert('Not enough in register');
      e.target.value = '';
    } else {
      this.setState({
        [name]: diffCount,
      });
    }
  };

  swapTheCash = e => {
    const { $1, $2, $5, $10, $20 } = this.state;
    const target = e.target;
    const value = Number(target.value);
    const swapArray = [];
    const newRemTwenty = Math.floor(value % 20);
    const newSwapTwenty = Math.floor(value / 20);
    const newRemTen = Math.floor(newRemTwenty % 10);
    const newSwapTen = Math.floor(newRemTwenty / 10);
    const newRemFive = Math.floor(newRemTen % 5);
    const newSwapFive = Math.floor(newRemTen / 5);
    const newRemTwo = Math.floor(newRemFive % 2);
    const newSwapTwo = Math.floor(newRemFive / 2);
    const newSwapOne = Math.floor(newRemTwo / 1);

    if (newSwapTwenty > $20) {
      alert('sorry, not enough 20s in register');
      e.target.value = '';
    } else {
      swapArray.push(newSwapTwenty);
    }

    if (newSwapTen > $10) {
      alert('sorry, not enough 10s in register');
      e.target.value = '';
    } else {
      swapArray.push(newSwapTen);
    }

    if (newSwapFive > $5) {
      alert('sorry, not enough 5s in register');
      e.target.value = '';
    } else {
      swapArray.push(newSwapFive);
    }

    if (newSwapTwo > $2) {
      alert('sorry, not enough 2s in register');
      e.target.value = '';
    } else {
      swapArray.push(newSwapTwo);
    }

    if (newSwapOne > $1) {
      alert('sorry, not enough 1s in register');
      e.target.value = '';
    } else {
      swapArray.push(newSwapOne);
    }
    this.setState({
      cashSwap: swapArray,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <CashRegisterContext.Provider
        value={{
          ...this.state,
          emptyRegister: this.emptyRegister,
          exampleRegister: this.exampleRegister,
          countTheCash: this.countTheCash,
          cashValue: this.cashValue,
          takeTheCash: this.takeTheCash,
          swapTheCash: this.swapTheCash,
        }}
      >
        {children}
      </CashRegisterContext.Provider>
    );
  }
}
