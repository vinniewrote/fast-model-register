import React, { Component } from 'react';

class AddCash extends Component {
  render() {
    const { countTheCash, marketValue } = this.props;
    return (
      <div className="cash-up">
        <h4>Add Cash to Register</h4>
        <div className="cash-up-window">
          <div className="add-cash">
            <p>Add $1</p>
            <input
              type="text"
              name="$1"
              min="0"
              step="1"
              onBlur={countTheCash}
            />
          </div>
          <div className="add-cash">
            <p>Add $2</p>
            <input
              type="text"
              name="$2"
              min="0"
              step="1"
              onBlur={countTheCash}
            />
          </div>
          <div className="add-cash">
            <p>Add $5</p>
            <input
              type="text"
              name="$5"
              min="0"
              step="1"
              onBlur={countTheCash}
            />
          </div>
          <div className="add-cash">
            <p>Add $10</p>
            <input
              type="text"
              name="$10"
              min="0"
              step="1"
              onBlur={countTheCash}
            />
          </div>
          <div className="add-cash">
            <p>Add $20</p>
            <input
              type="text"
              name="$20"
              min="0"
              step="1"
              onBlur={countTheCash}
            />
          </div>
        </div>
        <div className="close-cash-window">
          {/* <input type="text" /> */}
          <button type="submit" onClick={marketValue}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddCash;
