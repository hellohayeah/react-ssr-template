import { combineReducers } from 'redux'
import { selectedSubreddit, postsBySubreddit } from './postsBySubreddit'

export default combineReducers({ selectedSubreddit, postsBySubreddit })
