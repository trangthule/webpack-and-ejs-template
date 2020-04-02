const webpack = require("webpack");
let path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  mode: env == "production" || env == "none" ? env : "development",
  // the bundle is intended to be used in a Node.js (server-side) program
  //target: "node",
  node: {
    fs: "empty"
  },
  entry: ["babel-polyfill", path.resolve(__dirname + "/src/index.js")],
  output: {
    path: path.resolve(__dirname + "/dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      }
    }),
    new HtmlWebpackPlugin({
      // template: "./src/template.html"
      // template: "!!ejs-compiled-loader!src/template.ejs"
      template: "!!raw-loader!" + path.join(__dirname, "src/template.ejs"),
      filename: "../views/layout/index.ejs"
    })
  ],
  optimization: {
    minimizer: []
  }
};
if (env == "production") {
  module.exports.optimization.minimizer.push(new UglifyJsPlugin());
}
//   module: {
//     rules: [
//
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: "style-loader"
//           },
//           {
//             loader: "css-loader",
//             options: {
//               modules: true,
//               importLoaders: 1,
//               localIdentName: "[name]_[local]_[hash:base64]",
//               sourceMap: true,
//               minimize: true
//             }
//           }
//         ]
//       }
//     ]
//   }
