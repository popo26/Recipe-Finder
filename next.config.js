/** @type {import('next').NextConfig} */
const nextConfig = {}

//added for dotenv
const webpack = require('webpack')
const { parsed: myEnv } = require('dotenv').config({
    path:'./.env'
})

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    }
}
//added end

//module.exports = nextConfig
