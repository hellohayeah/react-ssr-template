import React from 'react'

export const themes = {
  light: {
    foreground: '#333',
    background: '#f5f5f5'
  },
  dark: {
    foreground: '#f5f5f5',
    background: '#333'
  }
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})
