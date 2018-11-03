import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Portals extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot = document.getElementById('modal-root')
    modalRoot.appedChild(this.el)
  }

  componentWillUnmount() {
    modalRoot = document.getElementById('modal-root')
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default Portals
