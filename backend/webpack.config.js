const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: false
  }
};