import React, { Component } from 'react';

class AddCash extends Component {
  componentWillMount() {
    const currRegister = { ...this.props.currencyVault };
    this.setState({
      currRegister,
    });
  }

  countTheCash = event => {
    const target = event.target;
    const name = target.name;
    const value = Number(target.value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="addCash">
        <h4>Add Cash to Register</h4>
        <div className="addWindow">
          {this.state.currRegister.map(coin => (
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
          <input type="text" />
          <button type="submit" onClick={this.cashUp.bind(this)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddCash;
