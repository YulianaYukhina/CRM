const path = require('path');
const webpack = require('webpack');
const SaveAssetsJson = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  // Capture timing information for each module
  profile: false,

  // Switch loaders to debug mode
  mode: 'production',

  // Report the first error as a hard error instead of tolerating it
  bail: true,

  entry: ['@babel/polyfill', './assets/main.jsx'],

  output: {
    path: path.join(__dirname, '/public/dist/'),
    pathinfo: true,
    publicPath: '/dist/',
    filename: 'bundle.[hash].min.js'
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

  resolveLoader: {
    modules: ['node_modules']
  },

  plugins: [
    new CleanWebpackPlugin(['public/dist'], {
      verbose: true,
      dry: false
    }),
    new ProgressBarPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new UglifyJsPlugin(),
    new SaveAssetsJson({
      path: path.join(__dirname, '/public/dist/'),
      filename: 'assets.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?sourceMap' },
          { loader: 'sass-loader?sourceMap' }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/,
        use: ['file-loader?name=[path][name].[ext]']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 12288
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'assets')
      },
    ],

    noParse: /\.min\.js/
  }
};
