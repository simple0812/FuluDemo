const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const helper = require('./helper');
const commonConfig = require('./webpack.common'); // the settings that are common to prod and dev
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const vendorManifest = require('../dll/vendor-manifest.json');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helper.hasProcessFlag('hot');

module.exports = () => {
  const ctx = webpackMerge(commonConfig(), {
    devtool: 'cheap-module-source-map',
    output: {
      path: helper.root('dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[file].map',
      chunkFilename: '[id].chunk.js',
      library: 'ac_[name]',
      libraryTarget: 'var',
    },

    plugins: [
      new DefinePlugin({
        ENV: JSON.stringify(ENV),
        HMR: HMR,
        'process.env': {
          ENV: JSON.stringify(ENV),
          NODE_ENV: JSON.stringify(ENV),
          HMR: HMR,
        },
      }),

      new webpack.DllReferencePlugin({
        manifest: vendorManifest,
      }),
      new AddAssetHtmlPlugin([
        { filepath: helper.root('dll/vendor.dll.js'), includeSourcemap: true },
      ]),
      new LoaderOptionsPlugin({
        debug: true,
        options: {
        },
      }),
    ],

    devServer: {
      port: PORT,
      host: HOST,
      historyApiFallback: true,
      proxy: [{
        context: ['/api', '/'],
        target: 'http://localhost:5555',
        secure: false,
      }],
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
      },
    },
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false,
    },
  });

  return ctx;
};
