module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },
  module: {
    loaders: [
        { test: /\.css$/,
          loader: "style-loader!css-loader"
        },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        }
      },
      {
          test: /\.html$/,
          loader: "file?name=[name].[ext]"
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  }
};
