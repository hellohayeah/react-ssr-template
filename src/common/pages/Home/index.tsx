import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setLocale } from '../../store/languages/actions'
import { Locale } from '../../store/languages/types'

const style = css`
  padding: 32px;
  background-color: pink;
  font-size: 24px;
  border-radius: 4px;
`

const Home: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleLocaleChange = (e: React.FormEvent<HTMLButtonElement>) => {
    dispatch(setLocale(e.currentTarget.value as Locale))
  }

  return (
    <div className="home">
      {t('i18n-example')}
      <div className="container">
        <button value="zh_TW" onClick={handleLocaleChange} css={style}>
          Taiwanese
        </button>
        <button value="en_US" onClick={handleLocaleChange} css={style}>
          English
        </button>
      </div>
    </div>
  )
}

export default Home
