import React, { Component } from 'react';

class AvailableCash extends Component {
  render() {
    const { $1, $2, $5, $10, $20, total } = this.props;
    return (
      <div className="avail_cash">
        <h3>Available Cash</h3>
        <div className="cashonhand">Sum total:${total}</div>
        <div>$1:{$1}</div>
        <div>$2: {$2}</div>
        <div>$5: {$5}</div>
        <div>$10:{$10}</div>
        <div>$20:{$20}</div>
      </div>
    );
  }
}

export default AvailableCash;
