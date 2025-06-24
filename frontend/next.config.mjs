import nextConfigI18n from './next-i18next.config.js';

const nextConfig = {
    ...nextConfigI18n,
    reactStrictMode: true,
    images: {
        domains: ['github.com', 'githubusercontent.com',
        'avatars.githubusercontent.com',],
    },
    /* config options here */
};

export default nextConfig;
