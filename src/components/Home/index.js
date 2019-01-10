import React, { Component } from 'react'
import { HomeStyle } from './style'
import Footer from './Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </HomeStyle>
    )
  }
}

export default Home
