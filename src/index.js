import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RegisterProvider } from './contexts/RegisterContext';

ReactDOM.render(
  <RegisterProvider>
    <App />
  </RegisterProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
