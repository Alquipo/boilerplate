import React, { createContext, useContext, useEffect, useState } from 'react'

import usePersistedLocalStorage from 'hooks/usePersistedLocalStorage'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { combineTheme, dark, light } from 'styles/themes'

export interface ThemeContextData {
  toggleTheme: () => void
  theme: DefaultTheme
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
)

const ThemesProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedLocalStorage<DefaultTheme>(
    process.env.NEXT_PUBLIC_KEY_STORAGE_THEME,
    combineTheme(light)
  )

  function toggleTheme() {
    setTheme(theme.name === 'LIGHT' ? combineTheme(dark) : combineTheme(light))
  }
  // const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark))

  // useEffect(() => {
  //   const themeLocal = localStorage.getItem('@MoveIt:theme')

  //   setTheme(themeLocal === 'LIGHT' ? combineTheme(light) : combineTheme(dark))
  // }, [])

  // const toggleTheme = () => {
  //   if (theme.name === 'DARK') {
  //     localStorage.setItem('@MoveIt:theme', light.name)
  //     setTheme(combineTheme(light))
  //   } else {
  //     localStorage.setItem('@MoveIt:theme', dark.name)
  //     setTheme(combineTheme(dark))
  //   }
  // }
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

const useToggleTheme = () => useContext(ThemeContext)

export { useToggleTheme, ThemesProvider }
