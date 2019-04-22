import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CashRegister } from './contexts/CashRegister';

ReactDOM.render(
  <CashRegister>
    <App />
  </CashRegister>,
  document.getElementById('root')
);
serviceWorker.unregister();
