import React, { useEffect } from 'react'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getLocale } from '../store/languages/selectors'

import zhTW from './locales/zh_TW/translation.json'
import enUS from './locales/en_US/translation.json'

i18next.init({
  fallbackLng: 'zh_TW',
  fallbackNS: ['translation'],
  resources: {
    zh_TW: { translation: zhTW },
    en_US: { translation: enUS },
  },
})

i18next.languages = ['zh_TW', 'en_US']

const I18N: React.FC<any> = ({ children }) => {
  const locale = useSelector(getLocale)

  useEffect(() => {
    i18next.changeLanguage(locale)
  }, [locale])

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}

export default React.memo(I18N)
