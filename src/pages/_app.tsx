import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="img/favicon.png" />
        <link rel="apple-touch-icon" href="img/favicon.png" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f2f3f5" />
        <meta name="description" content="Boilerplate" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
