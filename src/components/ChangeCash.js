import React, { Component } from 'react';
import propTypes from 'prop-types';

class ChangeCash extends Component {
  static propTypes = {
    swapTheCash: propTypes.func,
    cashSwap: propTypes.array,
  };

  render() {
    const { swapTheCash, cashSwap } = this.props;
    return (
      <div className="cash-swap">
        <h4>Swap Cash</h4>
        <div className="cash-swap-window">
          <div className="swap-cash">
            <input
              type="text"
              name="swap-value"
              min="0"
              step="1"
              onBlur={swapTheCash}
            />
          </div>
        </div>
        <div className="swap-container">
          {cashSwap.map((item, key) => (
            <div key={key} className={`swap-${key}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ChangeCash;
