import React, { Component } from 'react';

class CashAvailable extends Component {
  render() {
    const { currencyVault, total, load, save, remove } = this.props;
    // save('dollars', currencyVault.$1);
    // save('two-dollars', currencyVault.$2);
    // save('fivers', currencyVault.$5);
    // save('ten-spot', currencyVault.$10);
    // save('twenties', currencyVault.$20);
    return (
      <div className="avail_cash">
        <h3>Available Cash</h3>
        <div className="cashonhand">Sum total:${total}</div>
        {currencyVault.map(denoms => (
          <div>
            {denoms.id}:{denoms.onHand}
          </div>
        ))}
      </div>
    );
  }
}

export default CashAvailable;
