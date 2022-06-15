import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// import ReactLogo from '../../assets/images/logo.svg'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className="header">
      {/* <ReactLogo /> */}
      <nav className="menu_bar">
        <ul>
          <li>
            <Link to="/">{t('nav.home')}</Link>
          </li>
          <li>
            <Link to="/about">{t('nav.about')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
