import * as ACTION_TYPE from '../actions/action_type'

const initialState = { stateprop1: false }

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        stateprop1: true
      }
    case ACTION_TYPE.FAILURE:
      return {
        ...state,
        stateprop1: false
      }
    default:
      return state
  }
}

export default reducer1
