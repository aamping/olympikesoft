import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './pages/index.css';

React.initializeTouchEvents && React.initializeTouchEvents(true);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
