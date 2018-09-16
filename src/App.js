import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/style.scss';

import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
