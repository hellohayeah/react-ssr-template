import React, { Component } from 'react'

export default class post extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }
}
