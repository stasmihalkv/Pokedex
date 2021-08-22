const paths = require("./paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cssSetup = [
  {
    test: /\.less$/,
    exclude: [paths.appNodeModules],
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: "[name]__[local]"
          }
        },
        {
          loader: "less-loader",
          options: {
            modules: true,
            javascriptEnabled: true
          }
        }
      ]
    })
  },
  {
    test: /\.css$/,
    include: [paths.appNodeModules],
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader"
        }
      ]
    })
  },
  {
    test: /\.less$/,
    include: [paths.appNodeModules],
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader"
        },
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }
      ]
    })
  }
];

module.exports = {
  entry: [paths.appIndexJs],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: paths.alias
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        loader: "ts-loader"
      },
      {
        test: /\.(png|svg)$/,
        use: ["file-loader"]
      },
      ...cssSetup
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ExtractTextPlugin("style_[hash].css"),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    })
  ]
};
