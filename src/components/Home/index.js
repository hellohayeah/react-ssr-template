import React, { Component } from 'react';
import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sss: 'ss',
    };
  }

  render() {
    const { sss } = this.state;
    return (
      <div className="home">
        { sss }
      </div>
    );
  }
}

export default Home;
