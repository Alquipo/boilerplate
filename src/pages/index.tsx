import Main from 'components/Main'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="Principal" />
      <Main page="/page2" />
    </>
  )
}
