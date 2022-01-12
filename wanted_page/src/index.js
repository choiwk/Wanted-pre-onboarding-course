import ReactDOM from 'react-dom';
import React from 'react';
import Routes from './Routes';
import '../src/styles/styles.scss';
import Nav from './Components/Nav/Nav';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
