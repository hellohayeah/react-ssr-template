import React, { Component } from 'react'
import './style.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      strength: 0
    }
  }

  passChange = e => {
    const { value } = e.target
    const { password, strength } = this.state
    const score = value.length

    if (score === 1) return (score += 5)

    console.log(score)

    this.setState({ password: value, strength: score })
  }

  howStrong = () => {
    const { strength } = this.state
    if (strength > 10) return 'Good'
    if (strength > 20) return 'Great'
    if (strength > 30) return 'Perfect'
    return 'Weal'
  }

  render() {
    const { password } = this.state

    return (
      <div className="home">
        <input type="password" value={password} onChange={this.passChange} />
        <span>{this.howStrong()}</span>
      </div>
    )
  }
}

export default Home
