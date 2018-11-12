import React, { PureComponent } from 'react';

class TestPure extends PureComponent {
  render() {
    console.log('TestPure');
    return <div>TestPure</div>;
  }
}

export default TestPure;
