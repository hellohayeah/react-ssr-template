import React, { Component } from 'react'
// import styled, {
//   css,
//   keyframes,
//   ThemeProvider,
//   className
// } from 'styled-components'
// import StyleTest from './StyleTest'
import styles from './style.scss'

// const size = {
//   desktop: 1200,
//   tablet: 900,
//   phone: 600
// }

// const media = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${size[label] / 16}em) {
//       ${css(...args)}
//     }
//   `
//   console.log(acc, label, size[label])

//   return acc
// }, {})

// console.log(media)

// const Button = styled.button`
//   height: 3em;
//   width: 3em;
//   background: papayawhip;
//   ${media.desktop`background: dodgerblue;`}
//   ${media.tablet`background: mediumseagreen;`}
//   ${media.phone`background: palevioletred;`}
// `

class Home extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  render() {
    return (
      <div className={styles.home}>
        <div className="life-cycle">123</div>
        <p>123</p>
      </div>
    )
  }
}

export default Home
