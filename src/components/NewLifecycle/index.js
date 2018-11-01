import React, { Component } from 'react'

import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'
import Dialog from './Dialog'

export class index extends Component {
  constructor(props) {
    super(props)
    this.textInput = null
    this.setTextInputRef = element => {
      this.textInput = element
    }

    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus()
    }
  }

  componentDidMount() {
    this.focusTextInput()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}

export default index
