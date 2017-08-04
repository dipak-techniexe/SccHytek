const { resolve } = require("path")

module.exports = {
  context: resolve(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { enforce: "pre", test: /\.tsx?$/, loader: "source-map-loader" },
      { test: /\.tsx?/, loader: "ts-loader", exclude: /node_modules/ },
      { test: /\.(scss|css)$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }]},
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      Images: resolve(__dirname, 'src/images')
    }
  },
  devtool: "inline-source-map"
}