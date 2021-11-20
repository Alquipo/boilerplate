import * as NextImage from "next/image";

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest } = props
    return <img {...rest} />
  }
})

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
