const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './assets/main.jsx'
  ],

  output: {
    path: path.join(__dirname, '/public/dist/'),
    filename: 'bundle.js',
    pathinfo: true,
    publicPath: 'http://localhost:8080/dist/'
  },

  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      assets: 'assets',
      styles: 'assets/styles',
      components: 'assets/components/'
    },
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __ENV__: process.env.NODE_ENV
    })
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?sourceMap' },
          { loader: 'sass-loader?sourceMap' }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/,
        use: [{ loader: 'file-loader?name=[path][name].[ext]' }]
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.jpg$/,
        use:[{loader: "url-loader?limit=10000&mimetype=image/jpg"}]
      }
    ],

    noParse: /\.min\.js/
  }
};
