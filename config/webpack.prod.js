const paths = require("./paths");
const webpackCommonConfig = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  ...webpackCommonConfig,
  output: {
    path: paths.appBuild,
    filename: "static/js/bundle_[hash].js"
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        cache: true,
        parallel: true,
        terserOptions: {
          extractComments: "all",
          compress: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            drop_console: true
          }
        }
      })
    ]
  }
};
