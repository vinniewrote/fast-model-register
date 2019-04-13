import React, { createContext, Component } from 'react';

export const RegisterContext = createContext();

export class RegisterProvider extends Component {
  state = {
    $1: 0,
    $2: 0,
    $5: 0,
    $10: 0,
    $20: 0,
    total: 0,
  };

  checkVals = () => {
    const ones = Number(document.getElementById('add-one').value);
    const twos = Number(document.getElementById('add-two').value);
    const fives = Number(document.getElementById('add-five').value);
    const tens = Number(document.getElementById('add-ten').value);
    const twentys = Number(document.getElementById('add-twenty').value);
    const grandTotal =
      ones * 1 + twos * 2 + fives * 5 + tens * 10 + twentys * 20;
    console.log(grandTotal);
    document.getElementById('sum-total').value = grandTotal;
    this.setState({
      $1: ones,
      $2: twos,
      $5: fives,
      $10: tens,
      $20: twentys,
      total: grandTotal,
    });
  };

  takeVals = () => {
    const ones = Number(document.getElementById('take-one').value);
    const twos = Number(document.getElementById('take-two').value);
    const fives = Number(document.getElementById('take-five').value);
    const tens = Number(document.getElementById('take-ten').value);
    const twentys = Number(document.getElementById('take-twenty').value);
    const grandTake =
      ones * 1 + twos * 2 + fives * 5 + tens * 10 + twentys * 20;
    console.log(grandTake);
    this.setState({
      $1: ones,
      $2: twos,
      $5: fives,
      $10: tens,
      $20: twentys,
      total: grandTake,
    });
  };

  render() {
    return (
      <RegisterContext.Provider
        value={{
          ...this.state,
          checkVals: this.checkVals,
        }}
      >
        {this.props.children}
      </RegisterContext.Provider>
    );
  }
}
