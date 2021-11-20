import * as NextImage from "next/image";

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import { combineTheme, dark, light } from '../src/styles/themes'
import { ThemeContext } from '../src/context/toggleTheme'


Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest } = props
    return <img {...rest} />
  }
})

export const decorators = [
  (Story, context) => (


    <ThemeContext.Provider value={{ toggleTheme, ...context.args }}>
      <ThemeProvider theme={combineTheme(light)}><GlobalStyles />
        <Story /></ThemeProvider>
    </ThemeContext.Provider>
  )
]
