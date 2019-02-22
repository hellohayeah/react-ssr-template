import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded } from '../../actions'
import Picker from './picker'
import Post from './post'

export class AsyncApp extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  handleChange = nextSelected => {
    const { dispatch } = this.props
    dispatch(selectSubreddit(nextSelected))
    dispatch(fetchPostsIfNeeded(nextSelected))
  }

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    console.log(posts)
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && <Post posts={posts} />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp)
