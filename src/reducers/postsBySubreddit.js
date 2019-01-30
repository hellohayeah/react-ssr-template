import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT
} from '../actions'

function posts(
  state = { isFetching: false, didInvalidate: false, items: [] },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    default:
      return state
  }
}

export function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit

    default:
      return state
  }
}

export function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}
