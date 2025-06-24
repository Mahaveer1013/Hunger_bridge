import nextConfigI18n from './next-i18next.config.js';

const nextConfig = {
    ...nextConfigI18n,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
        ],
    },
    /* config options here */
};

export default nextConfig;
