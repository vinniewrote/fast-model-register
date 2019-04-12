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
  };

  render() {
    return (
      <RegisterContext.Provider>
        value=
        {{
          ...this.state,
          checkVals: this.checkVals,
        }}
        >{this.props.children}
      </RegisterContext.Provider>
    );
  }
}
