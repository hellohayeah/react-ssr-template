import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import s from './header.module.scss'
// import ReactLogo from '../../assets/images/logo.svg'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className={s.header}>
      {/* <ReactLogo /> */}
      <h2>{t('features')}</h2>
      <nav className={s.menu_bar}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
