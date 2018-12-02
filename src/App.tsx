import * as React from 'react'

export interface AppProps {
  compiler: string
  framework: string
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { compiler, framework } = this.props
    return (
      <h1>
        Hello! from {compiler} and {framework}!
      </h1>
    )
  }
}

export default App
