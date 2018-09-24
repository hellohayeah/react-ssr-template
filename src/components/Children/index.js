import React, { Component } from 'react'
import './style.scss'

class Children extends Component {
  constructor(props) {
    super(props)
    this.state = {
      innerText: ''
    }
  }

  componentWillMount() {
    const { text } = this.state
    console.log(text, 'componentWillMount')
  }

  componentDidMount() {
    const { text } = this.state
    console.log(text, 'componentDidMount')
  }

  componentWillReceiveProps({ text }) {
    this.setState({ innerText: text })
    console.log(text, 'componentWillReceiveProps')
  }

  // componentWillUpdate(nextProps, nextState) {
  //   const { text } = this.props
  //   if (text !== nextProps.text) {
  //     this.setState({ innerText: text })
  //   }
  //   console.log(nextProps.text, 'componentWillUpdate')
  // }

  // componentDidUpdate(prevProps) {
  //   const { text } = this.props
  //   if (text !== prevProps.text) {
  //     this.setState({ innerText: text })
  //   }
  //   console.log(prevProps.text, 'componentDidUpdate')
  // }

  // componentWillUnmount() {
  //   const { text } = this.props
  //   console.log(text, 'componentWillUnmount')
  // }

  render() {
    const { innerText } = this.state
    return <div className="children">{innerText}</div>
  }
}

export default Children
