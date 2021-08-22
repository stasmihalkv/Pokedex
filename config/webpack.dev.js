const webpackCommonConfig = require("./webpack.common");

module.exports = {
  ...webpackCommonConfig,
  mode: "development",
  devtool: "eval-source-map"
};
