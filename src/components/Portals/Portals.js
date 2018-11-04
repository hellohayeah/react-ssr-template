import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

export class Portals extends Component {
  constructor(props) {
    super(props)
    this.container = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.container)
  }

  componentWillUnmount() {
    document.body.removeChild(this.container)
  }

  render() {
    return ReactDOM.createPortal(
      <Fragment>
        {this.props.children}
        <button>show</button>
      </Fragment>,
      this.container
    )
  }
}

export default Portals
