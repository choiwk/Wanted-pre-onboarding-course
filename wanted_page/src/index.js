import ReactDOM from 'react-dom';
import React from 'react';
import Routes from './Routes';
import '../src/styles/styles.scss';
import flexbox from '../src/styles/mixins/_flexbox';
import Nav from './Components/Nav/Nav';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={{ ...flexbox }}>
    <Nav />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
