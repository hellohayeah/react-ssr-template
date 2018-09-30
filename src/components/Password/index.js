import React, { Component } from 'react'
import './style.scss'

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      strength: 0
    }
  }

  passChange = e => {
    const { value } = e.target
    const { password } = this.state
    let score = value.length

    if (/[A-Z]/.test(password)) score *= 1.25
    if (/[a-z]/.test(password)) score *= 1.25
    if (/[0-9]/.test(password)) score *= 1.25
    if (/[^A-Za-z0-9]/.test(password)) score *= 1.25

    console.log(score)
    this.setState({ password: value, strength: score })
  }

  howStrong = () => {
    const { strength } = this.state
    if (strength > 30) return 'Perfect'
    if (strength > 20) return 'Great'
    if (strength > 10) return 'Good'
    return 'Weak'
  }

  render() {
    const { password } = this.state

    return (
      <div className="password">
        <input type="password" value={password} onChange={this.passChange} />
        <span>{this.howStrong()}</span>
      </div>
    )
  }
}

export default Password
