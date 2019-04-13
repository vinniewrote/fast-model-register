import React, { Component } from 'react';

class AddCash extends Component {
  render() {
    return (
      <div className="addCash">
        <h4>Add Cash to Register</h4>
        <div className="addWindow">
          <button type="button" className="add-one-dollar">
            <p>Add $1</p>
            <input id="add-one" type="number" name="points" step="1" />
          </button>
          <button type="button" className="add-two-dollar">
            <p>Add $2</p>
            <input id="add-two" type="number" name="points" step="1" />
          </button>
          <button type="button" className="add-five-dollar">
            <p>Add $5</p>
            <input id="add-five" type="number" name="points" step="1" />
          </button>
          <button type="button" className="add-ten-dollar">
            <p>Add $10</p>
            <input id="add-ten" type="number" name="points" step="1" />
          </button>
          <button type="button" className="add-twenty-dollar">
            <p>Add $20</p>
            <input id="add-twenty" type="number" name="points" step="1" />
          </button>
          <input id="sum-total" className="total-to-add" type="text" />
          <button type="submit" onClick={this.props.checkVals.bind(this)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddCash;
