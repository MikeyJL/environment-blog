const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([
  [
    withMDX({
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
  ],
  nextConfig
])  