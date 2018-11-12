import React, { PureComponent } from 'react'

class MouseTracker extends PureComponent {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    )
  }
}

export default MouseTracker
