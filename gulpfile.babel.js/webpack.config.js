module.exports = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/}
    ]
  }
};