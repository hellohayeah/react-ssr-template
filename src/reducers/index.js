import { ADD_TODO } from './actions'

const initialState = {
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        ...state.todos,
        text: action.text,
        compleed: false
      })
    default:
      return state
  }
}
