/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'cdn.dummyjson.com', protocol: "https", pathname:'/**',
        },],
    },
};

export default nextConfig;
