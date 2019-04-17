import React, { createContext, Component } from 'react';

export const RegisterContext = createContext();

export class RegisterProvider extends Component {
  state = {
    $1: 10,
    $2: 5,
    $5: 5,
    $10: 5,
    $20: 10,
  };

  marketValue = () => {
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
      console.log('whoops');
      console.log(previousCount);
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
    console.log(e.target);
    const value = Number(e.target.value);
    const prevDiffCount = this.state[name];
    const diffCount = prevDiffCount - value;
    console.log(e.target);
    if (prevDiffCount === 0) {
      alert('The drawer has no cash of this denomitation');
    } else if (diffCount < 0) {
      alert('Not enough in register');
    } else {
      this.setState({
        [name]: diffCount,
      });
    }
  };

  swapTheCash = e => {
    const target = e.target;
    const name = target.name;
    const value = Number(target.value);
    const swapArray = [];
    const newRemTwenty = Math.floor(value % 20);
    const newSwapTwenty = Math.floor(value / 20);

    swapArray.push(newSwapTwenty);
    const newRemTen = Math.floor(newRemTwenty % 10);
    const newSwapTen = Math.floor(newRemTwenty / 10);

    swapArray.push(newSwapTen);
    const newRemFive = Math.floor(newRemTen % 5);
    const newSwapFive = Math.floor(newRemTen / 5);

    swapArray.push(newSwapFive);
    const newRemTwo = Math.floor(newRemFive % 2);
    const newSwapTwo = Math.floor(newRemFive / 2);

    swapArray.push(newSwapTwo);
    const newRemOne = Math.floor(newRemTwo % 1);
    const newSwapOne = Math.floor(newRemTwo / 1);

    swapArray.push(newSwapOne);
    console.log(swapArray);
    console.log(this.state);
  };

  render() {
    return (
      <RegisterContext.Provider
        value={{
          ...this.state,
          countTheCash: this.countTheCash,
          marketValue: this.marketValue,
          takeTheCash: this.takeTheCash,
          swapTheCash: this.swapTheCash,
        }}
      >
        {this.props.children}
      </RegisterContext.Provider>
    );
  }
}
