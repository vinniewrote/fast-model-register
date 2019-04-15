import React, { Component } from 'react';
import _ from 'lodash';

class RemoveCash extends Component {
  componentDidMount() {
    const arrRegister = _.cloneDeep(this.props.currencyVault);
    this.setState({
      arrRegister,
    });
  }

  takeTheCash = event => {
    const target = event.target;
    const name = target.name;
    const value = Number(target.value);
    const offer = this.state.arrRegister.find(o => o.id === name);
    const priorCount = offer.onHand;
    if (offer.onHand === 0) {
      console.log('cant do it');
    } else {
      const newCount = priorCount - value;
      console.log(newCount);
      this.setState({});
    }
  };

  render() {
    // const { currRegister } = this.state;
    // console.log(currRegister);
    return (
      <div className="cash-down">
        <h4>Take Cash from Register</h4>
        <div className="cash-down-window">
          {this.props.currencyVault.map(coin => (
            <div className="remove-cash">
              <p>Take {coin.id}</p>
              <input
                type="number"
                name={coin.id}
                min="0"
                step="1"
                onChange={this.takeTheCash}
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

export default RemoveCash;
