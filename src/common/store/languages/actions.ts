import { Locale } from './types'

export const ActionTypes = {
  SET_LOCALE: 'SET_LOCALE',
}

export const setLocale = (locale: Locale) => ({
  type: ActionTypes.SET_LOCALE,
  locale,
})
