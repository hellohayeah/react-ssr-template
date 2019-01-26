import { combineReducers } from 'redux'
import selectedSubreddit from './selectedSubreddit'
import postsBySubreddit from './postsBySubreddit'

export default combineReducers({
  selectedSubreddit,
  postsBySubreddit
})
