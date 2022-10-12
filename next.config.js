/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = withPWA(nextConfig)
