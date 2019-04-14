import React, { Component } from 'react';

class RemoveCash extends Component {
  cashDown = () => {
    const ones = Number(document.getElementById('take-one').value);
    const twos = Number(document.getElementById('take-two').value);
    const fives = Number(document.getElementById('take-five').value);
    const tens = Number(document.getElementById('take-ten').value);
    const twentys = Number(document.getElementById('take-twenty').value);
    const grandTake =
      ones * 1 + twos * 2 + fives * 5 + tens * 10 + twentys * 20;
    console.log(grandTake);
    this.setState({
      currencyVault: {
        $1: ones,
        $2: twos,
        $5: fives,
        $10: tens,
        $20: twentys,
      },
      total: grandTake,
    });
  };

  render() {
    return (
      <div className="transaction">
        <h4>Take Cash from Register</h4>
        <div className="removeWindow">
          <button type="button" className="add-one-dollar">
            <p>Take $1</p>
            <input id="take-one" type="number" name="points" step="1" />
          </button>
          <button type="button" className="add-two-dollar">
            <p>Take $2</p>
            <input id="take-two" type="number" name="points" step="1" />
          </button>
          <button type="button" className="add-five-dollar">
            <p>Take $5</p>
            <input id="take-five" type="number" name="points" step="1" />
          </button>
          <button type="button" className="add-ten-dollar">
            <p>Take $10</p>
            <input id="take-ten" type="number" name="points" step="1" />
          </button>
          <button type="button" className="add-twenty-dollar">
            <p>Take $20</p>
            <input id="take-twenty" type="number" name="points" step="1" />
          </button>
          <input id="amount-to-take" className="total-to-take" type="text" />
          <button type="submit" onClick={this.cashDown.bind(this)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default RemoveCash;
