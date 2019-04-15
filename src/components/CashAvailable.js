import React, { Component } from 'react';

class CashAvailable extends Component {
  render() {
    const calcTotal = this.props.currencyVault.map(
      denom => denom.onHand * denom.factor
    );
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const regSum = calcTotal.reduce(reducer);
    return (
      <div className="cash-available">
        <div className="register-container">
          <div className="total-cash">
            <h3>Cash Available ${regSum}</h3>
          </div>
          <div className="denominations">
            {this.props.currencyVault.map(denoms => (
              <div className="denom-container">
                <div className="denom-value">{denoms.id}</div>
                <div className="denom-count">
                  <h5>{denoms.onHand}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CashAvailable;
