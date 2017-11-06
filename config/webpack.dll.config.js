const path = require('path');
const webpack = require('webpack');
const helper = require('./helper');

module.exports = {
  entry: {
    vendor: ['lodash', 'moment'],
  },
  devtool: 'source-map',
  output: {
    path: helper.root('dll'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../', 'dll', '[name]-manifest.json'),
      name: '[name]_library',
    }),
  ],
};
