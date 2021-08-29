import { RouterContext } from "next/dist/shared/lib/router-context"

import '../.jest/next-image.mock'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
