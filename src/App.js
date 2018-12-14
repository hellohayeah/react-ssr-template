import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <BrowserRouter>
    <div className="App">
      <GlobalStyle />
      <React.StrictMode>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exac component={Home} />
          </Switch>
        </div>
      </React.StrictMode>
    </div>
  </BrowserRouter>
);

export default App;
