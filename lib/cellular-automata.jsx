import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');

  // TODO
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});
