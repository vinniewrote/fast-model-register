import React, { Component } from 'react';

class ChangeCash extends Component {
  componentDidMount() {
    const currRegister = { ...this.props.currencyVault };
    this.setState({
      currRegister,
    });
  }

  countTheCash = event => {
    const target = event.target;
    const name = target.name;
    const value = Number(target.value);
    console.log(name);
    console.log(value);
    // const offer = this.state.currRegister.find(o => o.id === name);
    // console.log(offer);
  };

  render() {
    // const { currRegister } = this.state;
    // console.log(currRegister);
    return (
      <div className="cash-swap">
        <h4>Swap Cash</h4>
        <div className="cash-swap-window">
          {this.props.currencyVault.map(coin => (
            <div className="remove-cash">
              <p>Swap {coin.id}</p>
              <input
                type="number"
                name={coin.id}
                min="0"
                step="1"
                onChange={this.countTheCash}
              />
            </div>
          ))}
        </div>
        <div className="close-cash-window">
          <input type="text" />
          <button type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default ChangeCash;
