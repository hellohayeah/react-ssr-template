import React, { Component } from 'react'
import { ThemeContext, themes } from './theme-context'
import ThemeTogglerButton from './theme-toggler-button'

export class index extends Component {
  constructor(props) {
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }

  content = () => (
    <div>
      <ThemeTogglerButton />
    </div>
  )

  render() {
    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state}>
          {this.content()}
        </ThemeContext.Provider>
        <h1>123</h1>
      </React.Fragment>
    )
  }
}

export default index
