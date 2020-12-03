import { combineReducers } from 'redux'
import languages from './languages/reducer'

const createRootReducer = () =>
  combineReducers({
    languages,
  })

export default createRootReducer
