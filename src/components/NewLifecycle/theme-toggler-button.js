import React from 'react'
import { ThemeContext } from './theme-context'

const ThemeTogglerButton = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.foreground
        }}
      >
        Toggle Theme
      </button>
    )}
  </ThemeContext.Consumer>
)

export default ThemeTogglerButton
