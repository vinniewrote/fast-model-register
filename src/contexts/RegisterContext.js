import React, { createContext, Component } from 'react';

export const RegisterContext = createContext();

export class RegisterProvider extends Component {
  state = {
    currencyVault: [
      {
        denomination: 1,
        name: 'one dollar',
        id: '$1',
        onHand: 0,
      },
      {
        denomination: 2,
        name: 'two dollar',
        id: '$2',
        onHand: 0,
      },
      {
        denomination: 5,
        name: 'five dollar',
        id: '$5',
        onHand: 0,
      },
      {
        denomination: 10,
        name: 'ten dollar',
        id: '$10',
        onHand: 0,
      },
      {
        denomination: 20,
        name: 'twenty dollar',
        id: '$20',
        onHand: 0,
      },
    ],
  };

  render() {
    return (
      <RegisterContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </RegisterContext.Provider>
    );
  }
}
