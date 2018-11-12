import React, { Component } from 'react'

const ExampleHoc = WrappedComponent => {
  return class extends WrappedComponent {
    login = () => {
      this.setState({loggedIn: true})
    }

    render() {
      if(this.state.loggedIn) {
        return super.render() 
      }
      return <div onClick={this.login}>登入</div>
    }
  }
}
export default ExampleHoc
