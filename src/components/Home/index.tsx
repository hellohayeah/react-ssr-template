import * as React from 'react'

class Home extends React.Component {
  render() {
    return <div className="home">Hello!!</div>
  }
}

export default Home
// import styled, {
//   css,
//   keyframes,
//   ThemeProvider,
//   className
// } from 'styled-components'
// import StyleTest from './StyleTest'
// import './style.scss'

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

// class Home extends Component {
//   constructor(props) {
//     super(props)
//     this.inputRef = React.createRef()
//   }

//   render() {
//     return (
//       <div className="home">
//         <Button>123</Button>
//       </div>
//     )
//   }
// }
