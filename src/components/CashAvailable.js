import React, { Component } from 'react';

class CashAvailable extends Component {
  componentDidMount() {
    this.props.marketValue();
  }

  render() {
    const { sumTotal, emptyRegister, exampleRegister } = this.props;
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
                <h5>{this.props.$1}</h5>
              </div>
            </div>

            <div className="denom-container">
              <div className="denom-value">$2</div>
              <div className="denom-count">
                <h5>{this.props.$2}</h5>
              </div>
            </div>

            <div className="denom-container">
              <div className="denom-value">$5</div>
              <div className="denom-count">
                <h5>{this.props.$5}</h5>
              </div>
            </div>

            <div className="denom-container">
              <div className="denom-value">$10</div>
              <div className="denom-count">
                <h5>{this.props.$10}</h5>
              </div>
            </div>

            <div className="denom-container">
              <div className="denom-value">$20</div>
              <div className="denom-count">
                <h5>{this.props.$20}</h5>
              </div>
            </div>
          </div>
          <div className="registerButtons">
            <button className="empty-reg" onClick={emptyRegister}>
              Empty Register
            </button>
            <button className="sample-reg" onClick={exampleRegister}>
              Morning Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CashAvailable;
