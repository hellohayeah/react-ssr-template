import { RECEIVE_POSTS } from '../actions'

export function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts,
        lastUpdated: action.receivedAt
      })

    default:
      return state
  }
}
