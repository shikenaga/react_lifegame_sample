const path = require('path');
const webpack = require('webpack');

const DEV_PORT = process.env.PORT || 3000;

module.exports = {
  entry: './src/main.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port: DEV_PORT,
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
