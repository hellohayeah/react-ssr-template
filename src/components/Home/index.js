import React, { Component } from 'react'
import { HomeStyle, Rotate } from './style'

class Home extends Component {
  reverseText = props => {
    console.log(props)
    return <button {...props} children={props.children.split('').reverse()} />
  }

  render() {
    return (
      <HomeStyle>
        <Rotate>&lt; 💅 &gt;</Rotate>
      </HomeStyle>
    )
  }
}

export default Home
