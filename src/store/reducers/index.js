import { combineReducers } from 'redux'
import reducer1 from './reducer1'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  reducer1,
  userReducer
})

export default rootReducer
