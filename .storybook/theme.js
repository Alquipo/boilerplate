import { create } from '@storybook/theming'
import theme from '../src/styles/theme'
import logo from '../public/img/nextjs-logo.svg'

export default create({
  base: 'dark',
  colorSecondary: theme.colors.primary,

  brandTitle: 'Boilerplate',
  brandUrl: 'https://alquipo.dev/',
  brandImage: logo
})
