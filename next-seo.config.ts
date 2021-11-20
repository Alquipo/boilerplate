import { NextSeoProps } from 'next-seo'

export default {
  titleTemplate: 'Boilerplate | %s',
  defaultTitle: 'Boilerplate | Boilerplate do Alquipo Neto',
  description: 'Boilerplate pronto para usar em projetos NEXT',
  canonical: 'https://github.com/Alquipo/boilerplate',
  openGraph: {
    title: 'Boilerplate | Boilerplate do Alquipo Neto',
    type: 'website',
    url: 'https://github.com/Alquipo/boilerplate',
    locale: 'pt_BR',
    site_name: 'Boilerplate',
    description: 'Boilerplate pronto para usar em projetos NEXT',
    images: [
      {
        url: '/img/nextjs-logo.svg',
        alt: 'Boilerplate pronto para usar em projetos NEXT',
        height: 1200,
        width: 630
      }
    ]
  },
  twitter: {
    handle: '@alquiponeto',
    site: '@site',
    cardType: 'summary_large_image'
  }
} as NextSeoProps
