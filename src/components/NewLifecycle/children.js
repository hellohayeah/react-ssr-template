import React, { PureComponent } from 'react'

export class children extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      msg: ['React', 'Re: React', 'Re:Re: React']
    }
  }

  clickTest = () => {
    const { login } = this.state
    this.setState({ login: !login })
  }

  UserGreeting = () => <div>UserGreeting</div>

  GuestGreeting = () => <div>GuestGreeting</div>

  render() {
    const { login, msg } = this.state
    console.log('children render')
    return (
      <div className="box">
        <div onClick={() => this.clickTest()}>children</div>
        {login ? this.UserGreeting() : this.GuestGreeting()}
        {msg.length > 0 && (
          <ul>
            {msg.map(m => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default children
