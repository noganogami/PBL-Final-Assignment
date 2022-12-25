/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
      dirs: ['src/components/', 'src/lib/', 'src/pages/'],
   },
}

                   module.exports = nextConfig
