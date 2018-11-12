import React, { Component } from 'react'
import Mouse from './Mouse'

const ExampleHoc = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <Mouse
          render={mouse => <WrappedComponent {...this.props} mouse={mouse} />}
        />
      )
    }
  }
}

export default ExampleHoc
