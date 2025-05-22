/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/volflame.github.io' : '',
  assetPrefix: isGithubPages ? '/volflame.github.io/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
