import { ThemesProvider } from 'context/toggleTheme'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'

import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemesProvider>
  )
}

export default App
