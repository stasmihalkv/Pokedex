/* eslint-disable import/no-dynamic-require,global-require,no-console */
require("dotenv").config({ silent: true });

const fs = require("fs-extra");
const webpack = require("webpack");
const FileSizeReporter = require("react-dev-utils/FileSizeReporter");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");

const paths = require("../config/paths");
const config = require("../config/webpack.prod");

const { measureFileSizesBeforeBuild } = FileSizeReporter;

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

const printErrors = (summary, errors) => {
  console.log(summary);
  errors.forEach(err => {
    console.log(err.message || err);
  });
};

const copyPublicFolder = () => {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  });
};

const build = () => {
  console.log("Production build is compiling");

  webpack(config).run((err, stats) => {
    if (err) {
      printErrors("Failed to compile", [err]);
      process.exit(1);
    }

    if (stats.compilation.errors.length) {
      printErrors("Failed to compile", stats.compilation.errors);
      process.exit(1);
    }

    if (process.env.CI && stats.compilation.warnings.length) {
      printErrors(
        "Failed to compile When process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically",
        stats.compilation.warnings
      );
      process.exit(1);
    }
    console.log("Run serve -s build to run");
  });
};

measureFileSizesBeforeBuild(paths.appBuild).then(previousFileSizes => {
  fs.emptyDirSync(paths.appBuild);
  build(previousFileSizes);
  copyPublicFolder();
});
