import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        // Configuration Webpack
        config.resolve.fallback = {
            fs: false,
        };
        return config;
    },
    sassOptions: {
        includePaths: [path.join(process.cwd(), "src/styles")],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                pathname: "/t/p/w500/**",
            },
        ],
        domains: ["example.com"], // Vous pouvez ajouter des domaines autorisés pour les images locales ici si nécessaire
    },
};

export default nextConfig;
