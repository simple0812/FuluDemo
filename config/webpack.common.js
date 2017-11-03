const helper = require('./helper');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (opt) => {
  const ctx = {
    entry: {
      app: './src/index.jsx',
      vendor: [
        'react', 'classnames', 'react-router', 'react-dom',
      ],
    },
    devtool: 'cheap-module-source-map',
    resolve: {
      extensions: [' ', '.js', '.jsx'],
    },
    output: {
      /* 输出目录，没有则新建 */
      path: helper.root('dist'),
      /* 文件名 */
      filename: '[name].[chunkhash].bundle.js',
      sourceMapFilename: '[name].[chunkhash].bundle.map',
      chunkFilename: '[id].[chunkhash].chunk.js',
    },
    module: {
      rules: [
        /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          // loader: 'react-hot!babel', // 暂时不用react-hot-loader
          loader: 'babel-loader',
        },
        {
          test: /\.less$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'less-loader',
          }],
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
          exclude: [helper.root('src', 'styles')],
        },

        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader',
        },
        {
          test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
          use: 'file-loader',
        },
        {
          test: require.resolve('jquery'), // 此loader配置项的目标是NPM中的jquery
          loader: 'expose-loader?jQuery!expose-loader?$', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
      new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
        { from: 'src/favicon.ico', to: 'favicon.ico' },
      ]),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunksSortMode: 'dependency',
        inject: 'footer',
      }),
    ],
    devServer: {
      historyApiFallback: true,
      proxy: [{
        context: ['/api'],
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
  };

  return ctx;
};
