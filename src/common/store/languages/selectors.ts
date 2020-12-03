import { createSelector } from 'reselect'
import { AppState, Locale } from './types'

export const languages = (state: { languages: AppState }): AppState => state.languages
export const getLocale = createSelector([languages], (languages): Locale => languages.locale)
