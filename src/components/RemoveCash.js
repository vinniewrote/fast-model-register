import React, { Component } from 'react';

class RemoveCash extends Component {
  render() {
    const { takeTheCash, marketValue } = this.props;
    return (
      <div className="cash-down">
        <h4>Take Cash from Register</h4>
        <div className="cash-down-window">
          <div className="remove-cash">
            <p>Take $1</p>
            <input
              type="text"
              name="$1"
              min="0"
              step="1"
              onBlur={takeTheCash}
            />
          </div>

          <div className="remove-cash">
            <p>Take $2</p>
            <input
              type="text"
              name="$2"
              min="0"
              step="1"
              onBlur={takeTheCash}
            />
          </div>

          <div className="remove-cash">
            <p>Take $5</p>
            <input
              type="text"
              name="$5"
              min="0"
              step="1"
              onBlur={takeTheCash}
            />
          </div>

          <div className="remove-cash">
            <p>Take $10</p>
            <input
              type="text"
              name="$10"
              min="0"
              step="1"
              onBlur={takeTheCash}
            />
          </div>

          <div className="remove-cash">
            <p>Take $20</p>
            <input
              type="text"
              name="$20"
              min="0"
              step="1"
              onBlur={takeTheCash}
            />
          </div>
        </div>
        <div className="close-cash-window">
          <button type="submit" onClick={marketValue}>
            Complete Transaction
          </button>
        </div>
      </div>
    );
  }
}

export default RemoveCash;
