import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled, { css } from 'styled-components'
import './assets/style.scss'

import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import Password from './components/Password'
import RegionSelect from './components/RegionSelect'
import ImagePreview from './components/ImagePreview'
import FilterList from './components/FilterList'
import FilterListWithColor from './components/FilterListWithColor'
import Portals from './components/Portals'
import ErrorBoundaries from './components/ErrorBoundaries'
import HOC from './components/Hoc'
import REF from './components/Ref'
import RenderProp from './components/RenderProp'
import ReactApi from './components/ReactApi'
import LifeCycle from './components/LifeCycle'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Container = styled.div`
  text-align: center;
`

const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Wrapper>
        <Title>Hello Style Component</Title>
        <Container>
          <Button>I'm a Normal Button!</Button>
          <Button primary>I'm a Primary Button!</Button>
        </Container>
      </Wrapper>
      <Menu />
      <div className="container">
        {/* <React.StrictMode> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/password" exact component={Password} />
          <Route path="/region-select" exact component={RegionSelect} />
          <Route path="/image-preview" exact component={ImagePreview} />
          <Route path="/filter-list" exact component={FilterList} />
          <Route
            path="/filter-list-with-color"
            exact
            component={FilterListWithColor}
          />
          <Route path="/portals" exact component={Portals} />
          <Route path="/error-boundaries" exact component={ErrorBoundaries} />
          <Route path="/hoc" exact component={HOC} />
          <Route path="/ref" exact component={REF} />
          <Route path="/render-prop" exact component={RenderProp} />
          <Route path="/react-api" exact component={ReactApi} />
          <Route path="/life-cycle" exact component={LifeCycle} />
        </Switch>
        {/* </React.StrictMode> */}
      </div>
    </div>
  </BrowserRouter>
)

export default App
