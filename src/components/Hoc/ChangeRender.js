import React, { Component } from 'react'

const ChangeRender = wrappedComponent => {
  return class extends wrappedComponent {
    render() {
      return (
        <div>
          <h3>HOC debugger</h3>
          <p>Props <pre>{JSON.stringify(this.props, null, 1)}</pre></p>
          <p>state <pre>{JSON.stringify(this.state, null, 1)}</pre></p>
          {super.render()}
        </div>
      )
    }
  }
}

export default ChangeRender
