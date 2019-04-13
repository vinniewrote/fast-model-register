import React, { Component } from 'react';

class AvailableCash extends Component {
  render() {
    const { dollarInventory, total, load, save, remove } = this.props;
    save('dollars', dollarInventory.$1);
    save('two-dollars', dollarInventory.$2);
    save('fivers', dollarInventory.$5);
    save('ten-spot', dollarInventory.$10);
    save('twenties', dollarInventory.$20);
    return (
      <div className="avail_cash">
        <h3>Available Cash</h3>
        <div className="cashonhand">Sum total:${total}</div>
        <div>$1:{dollarInventory.$1}</div>
        <div>$2: {dollarInventory.$2}</div>
        <div>$5: {dollarInventory.$5}</div>
        <div>$10:{dollarInventory.$10}</div>
        <div>$20:{dollarInventory.$20}</div>
      </div>
    );
  }
}

export default AvailableCash;
