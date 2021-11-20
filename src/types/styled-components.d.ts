import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      primary: string
      secondary: string
      mainBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
    }
    grid: {
      container: string
      gutter: string
    }
    border: {
      radius: string
    }
    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
      }
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
    layers: {
      base: number
      menu: number
      overlay: number
      modal: number
      alwaysOnTop: number
    }
  }

  export interface CustomTheme {
    name: string
    colors: {
      primary: string
      secondary: string
      mainBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
    }
  }
}
