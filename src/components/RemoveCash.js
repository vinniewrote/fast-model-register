import React, { Component } from 'react';

class RemoveCash extends Component {
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
          <button type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default RemoveCash;
