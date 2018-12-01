import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import './style.scss'

const Thing = styled.div`
  && {
    color: blue;
  }
`

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`

class Home extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Thing>I'm blue, da ba dee da ba daa</Thing>
      </React.Fragment>
    )
  }
}

export default Home
