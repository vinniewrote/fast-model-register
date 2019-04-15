import React, { Component } from 'react';

class Storage extends Component {
  state = {
    localStorageAvailable: false,
  };

  componentDidMount() {
    this.checkLocalStorageExists();
  }

  load = key => {
    if (this.state.localStorageAvailable) {
      return localStorage.getItem(key);
    }

    return null;
  };

  save = (key, data) => {
    if (this.state.localStorageAvailable) {
      localStorage.setItem(key, data);
    }
  };

  remove = key => {
    if (this.state.localStorageAvailable) {
      localStorage.removeItem(key);
    }
  };

  checkLocalStorageExists() {
    const testKey = 'test';
    try {
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      this.setState({ localStorageAvailable: true });
    } catch (e) {
      this.setState({ localStorageAvailable: false });
    }
  }

  render() {
    return (
      <div className="storage-wrapper">
        {this.props.render({
          load: this.load,
          save: this.save,
          remove: this.remove,
        })}
      </div>
    );
  }
}

export default Storage;
