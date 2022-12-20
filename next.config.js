/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['oiovhgyymhctzpzxgqmb.supabase.co', 'cdn.discordapp.com'],
  },
};

module.exports = nextConfig
