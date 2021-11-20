import Main from 'components/Main'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="Pagina 2" />

      <Main title="Teste rota" description="testando rota" page="/" />
    </>
  )
}
