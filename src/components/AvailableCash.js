import React, { Component } from 'react';

class AvailableCash extends Component {
  render() {
    return (
      <div className="avail_cash">
        <h3>Available Cash</h3>
        <div className="cashonhand">Sum total:$</div>
        <div>$1:</div>
        <div>$2:</div>
        <div>$5:</div>
        <div>$10:</div>
        <div>$20:</div>
      </div>
    );
  }
}

export default AvailableCash;
