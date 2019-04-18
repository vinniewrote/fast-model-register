import React, { Component } from 'react';

class ChangeCash extends Component {
  render() {
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
              onBlur={this.props.swapTheCash}
            />
          </div>
        </div>
        <div className="swap-container">
          {this.props.cashSwap.map((item, key) => (
            <div className={`swap-${key}`}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ChangeCash;
