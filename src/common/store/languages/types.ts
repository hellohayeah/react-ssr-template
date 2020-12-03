export type Locale = 'zh_TW' | 'en_US'

export type AppState = Readonly<{ locale: Locale }>

export type Action = {
  type: string
  locale: any
}
