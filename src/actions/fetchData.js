import fetch from 'cross-fetch'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts(subreddit) {
  return dispatch => {
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => res.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}
