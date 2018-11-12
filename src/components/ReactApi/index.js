import React, { Component } from 'react';
import './style.scss';
import TestPure from './TestPure';

class ReactApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: 1
    };
  }

  render() {
    console.log('ReactApi');
    return (
      <div className="react-api">
        {this.state.now}
        <TestPure />
      </div>
    );
  }
}

export default ReactApi;
