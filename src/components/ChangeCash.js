import React, { Component } from 'react';

class ChangeCash extends Component {
  render() {
    return (
      <div className="cash-swap">
        <h4>Swap Cash</h4>
        <div className="cash-swap-window">
          <div className="remove-cash">
            <p>Swap $</p>
            <input
              type="text"
              name="swap-value"
              min="0"
              step="1"
              onBlur={this.props.swapTheCash}
            />
          </div>
        </div>
        <div className="close-cash-window">
          <button type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default ChangeCash;
