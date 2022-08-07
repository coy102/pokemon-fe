const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

// SETUP PWA with env
// sw js will generated when we running this app
module.exports = withPWA({
  pwa: {
    disable: true, // or validate using NODE_ENV
    dest: 'public',
    runtimeCaching,
    sw: '/logo/sw.js',
  },
  images: {
    domains: ['localhost', 's4.anilist.co'],
  },
})
