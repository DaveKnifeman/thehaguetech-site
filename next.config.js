require('dotenv').config();
const webpack = require('webpack');

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        );
        config.plugins.push(
            new webpack.DefinePlugin({
                SPACE_ID: JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
                ACCESS_TOKEN: JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
            })
        );
        config.optimization.minimize = false;
        config.node.fs = "empty";
        return config
    }
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
    }
};
