/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_uri: "mongodb://root:jirasoftwaredb@ac-vuygd2n-shard-00-00.mbqqvaa.mongodb.net:27017,ac-vuygd2n-shard-00-01.mbqqvaa.mongodb.net:27017,ac-vuygd2n-shard-00-02.mbqqvaa.mongodb.net:27017/jirasoftware?ssl=true&replicaSet=atlas-bkre3u-shard-0&authSource=admin&retryWrites=true&w=majority",
  },
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
