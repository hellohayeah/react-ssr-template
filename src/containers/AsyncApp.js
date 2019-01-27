import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions'

import Post from '../components/post'

export class AsyncApp extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts('reactjs'))
  }

  render() {
    const { posts } = this.props
    console.log(posts)
    return (
      <div>
        {posts == null && <h2>Loading...</h2>}
        {posts != null && <Post posts={posts} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postsBySubreddit.items
})

export default connect(mapStateToProps)(AsyncApp)
