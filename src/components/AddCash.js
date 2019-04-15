import React, { Component } from 'react';
import _ from 'lodash';

class AddCash extends Component {
  componentDidMount() {
    const arrRegister = _.cloneDeep(this.props.currencyVault);
    this.setState({
      arrRegister,
    });
  }

  countTheCash = event => {
    const target = event.target;
    const name = target.name;
    const value = Number(target.value);
    const offer = this.state.arrRegister.find(o => o.id === name);
    console.log(offer);
    const priorCount = offer.onHand;
    if (offer.onHand) {
      const newCount = priorCount + value;
      const updatedCount = console.log(newCount);
      return (offer.onHand = newCount);
    }
  };

  render() {
    // const { currRegister } = this.state;
    // console.log(currRegister);
    return (
      <div className="cash-up">
        <h4>Add Cash to Register</h4>
        <div className="cash-up-window">
          {this.props.currencyVault.map(coin => (
            <div className="add-cash">
              <p>Add {coin.id}</p>
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

export default AddCash;
