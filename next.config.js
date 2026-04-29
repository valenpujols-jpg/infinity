/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/contacto',      destination: '/contact',       permanent: true },
      { source: '/terminos',      destination: '/terms',         permanent: true },
      { source: '/privacidad',    destination: '/privacy',       permanent: true },
      { source: '/aviso-legal',   destination: '/legal',         permanent: true },
      { source: '/cookies',       destination: '/cookie-policy', permanent: true },
      { source: '/sobre-nosotros',destination: '/about',         permanent: true },
      { source: '/servicios',     destination: '/services',      permanent: true },
      { source: '/servicios/:path*', destination: '/services/:path*', permanent: true },
      { source: '/sms-terms',     destination: '/terms',         permanent: true },
      { source: '/faq',           destination: '/faq',           permanent: false },
    ]
  },
}

module.exports = nextConfig
