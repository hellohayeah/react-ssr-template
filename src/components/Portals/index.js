import React, { Component } from 'react'
import Portals from './Portals'

export class index extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  togglwShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { show } = this.state
    return (
      <div className="content" onClick={this.togglwShow}>
        <button>show</button>
        {show && (
          <Portals>
            <h1>充值地址</h1>
            <p>3345678</p>
          </Portals>
        )}
      </div>
    )
  }
}

export default index
