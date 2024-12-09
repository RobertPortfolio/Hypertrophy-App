import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from  'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
