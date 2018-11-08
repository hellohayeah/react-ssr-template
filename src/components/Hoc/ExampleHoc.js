import React, { Component } from 'react'

const ExampleHoc = WrappedComponent => {
  return class extends WrappedComponent {
    render() {
      console.log(this.state, 'state')
      return super.render()
    }
  }
}
export default ExampleHoc
