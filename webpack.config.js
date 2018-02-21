const path = require('path');
const webpack = require('webpack');

const config = module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js', //ignored?
    },
    profile: true
};
