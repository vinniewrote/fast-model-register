import React, { Component } from 'react';
import propTypes from 'prop-types';

class CashAvailable extends Component {
  static propTypes = {
    cashValue: propTypes.func,
    emptyRegister: propTypes.func,
    exampleRegister: propTypes.func,
    sumTotal: propTypes.func,
    $1: propTypes.number,
    $2: propTypes.number,
    $5: propTypes.number,
    $10: propTypes.number,
    $20: propTypes.number,
  };

  componentDidMount() {
    const { cashValue } = this.props;
    cashValue();
  }

  render() {
    const {
      sumTotal,
      emptyRegister,
      exampleRegister,
      $1,
      $2,
      $5,
      $10,
      $20,
    } = this.props;
    return (
      <div className="cash-available">
        <div className="register-container">
          <div className="total-cash">
            <h3>Value of Available Cash ${sumTotal}</h3>
          </div>
          <div className="denominations">
            <div className="denom-container">
              <div className="denom-value">$1</div>
              <div className="denom-count">
                <h5>{$1}</h5>
              </div>
            </div>

            <div className="denom-container">
              <div className="denom-value">$2</div>
              <div className="denom-count">
                <h5>{$2}</h5>
              </div>
            </div>

            <div className="denom-container">
              <div className="denom-value">$5</div>
              <div className="denom-count">
                <h5>{$5}</h5>
              </div>
            </div>

            <div className="denom-container">
              <div className="denom-value">$10</div>
              <div className="denom-count">
                <h5>{$10}</h5>
              </div>
            </div>

            <div className="denom-container">
              <div className="denom-value">$20</div>
              <div className="denom-count">
                <h5>{$20}</h5>
              </div>
            </div>
          </div>
          <div className="registerButtons">
            <button className="empty-reg" onClick={emptyRegister} type="button">
              Empty Register
            </button>
            <button
              className="sample-reg"
              onClick={exampleRegister}
              type="button"
            >
              Morning Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CashAvailable;
