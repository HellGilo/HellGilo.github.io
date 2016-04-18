module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./index.js",
    html: "./index.html",
  },

  output: {
    filename: "src.js",
    path: __dirname + "/build",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],

      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
}