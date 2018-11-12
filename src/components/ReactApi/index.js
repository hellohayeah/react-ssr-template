import React, { Component } from 'react';
import './style.scss';
import TestPure from './TestPure';

class ReactApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: Date.now()
    };
  }

  componentDidMount() {
    this.now();
  }

  componentWillUnmount() {
    clearInterval(this.now());
  }

  now = () => {
    setInterval(() => {
      this.setState({ now: Date.now() });
    }, 1000);
  };

  render() {
    return (
      <div className="react-api">
        {this.state.now}
        <TestPure />
      </div>
    );
  }
}

export default ReactApi;
