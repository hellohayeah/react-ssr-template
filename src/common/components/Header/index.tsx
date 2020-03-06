import React from 'react'
import s from './header.module.scss'
import { ReactComponent as ReactLogo } from '../../../assets/images/logo.svg'

const Header: React.FC = () => (
  <header className={s.header}>
    <ReactLogo className={s.logo} />
    <h2>React SSR with TypeScript</h2>
  </header>
)

export default Header
