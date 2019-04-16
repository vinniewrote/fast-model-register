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
      alert('The drawer has an error');
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
    const amtArray = [20, 10, 5, 2, 1];
    const calcs = parseInt(value / amtArray);
    // total %= amtArray[i];
    console.log(calcs);
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
