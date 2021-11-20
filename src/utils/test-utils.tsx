import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { combineTheme, light } from 'styles/themes'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={combineTheme(light)}>{children}</ThemeProvider>)
