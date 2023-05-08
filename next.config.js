/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["firebasestorage.googleapis.com","res.cloudinary.com","cdn.unitycms.io","images.pexels.com","sportbusiness.club","gameher.fr","lh3.googleusercontent.com"],
  }
}

module.exports = nextConfig
