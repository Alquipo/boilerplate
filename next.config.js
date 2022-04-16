// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
