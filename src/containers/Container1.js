import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ACTION from '../store/actions'
import * as ACTION_TYPE from '../store/actions/action_type'

class Container1 extends Component {
  render() {
    const user_text = 'user text'
    console.log(this.props)

    return (
      <div>
        <button onClick={() => this.props.action1()}>SUCCESS</button>
        <button onClick={() => this.props.action2()}>FAILURE</button>
        <button onClick={() => this.props.action_creator1()}>
          SUCCESS creator
        </button>
        <button onClick={() => this.props.action_creator2()}>
          FAILURE creator
        </button>
        <button onClick={() => this.props.action_creator3(user_text)}>
          user input
        </button>
        {this.props.stateprop1 ? <h1>{this.props.user_text}</h1> : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    user_text: state.userReducer.user_text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTION.SUCCESS),
    action2: () => dispatch(ACTION.FAILURE),
    action_creator1: () => dispatch(ACTION.success()),
    action_creator2: () => dispatch(ACTION.failure()),
    action_creator3: text => dispatch(ACTION.userInput(text))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container1)
