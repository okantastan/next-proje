/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.dummyjson.com'], // Kullanmak istediğiniz resim domainini ekleyin
        remotePatterns: [
                {
                protocol: "https",
                hostname: "picsum.photos",
                },
            ],
    },
}

module.exports = nextConfig
