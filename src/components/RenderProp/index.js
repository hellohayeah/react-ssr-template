import React, { Component } from 'react'
import Mouse from './Mouse'
import Cat from './Cat'
import './style.scss'

class RenderProp extends Component {
  render() {
    return (
      <div className="render-prop" onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <Mouse
          render={mouse => (
            <p>
              {mouse.x}, {mouse.y}
            </p>
          )}
        />
      </div>
    )
  }
}

export default RenderProp
