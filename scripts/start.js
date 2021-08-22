/* eslint-disable no-console */
require("dotenv").config({ silent: true });
const chalk = require("chalk");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const historyApiFallback = require("connect-history-api-fallback");
const openBrowser = require("react-dev-utils/openBrowser");
const { createCompiler } = require("react-dev-utils/WebpackDevServerUtils");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");

const paths = require("../config/paths");
const webpackConfig = require("../config/webpack.dev");

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

const run = port => {
  const setupCompiler = () => {
    const compiler = createCompiler({
      webpack,
      config: webpackConfig,
      useTypeScript: true
    });
    console.log(chalk.yellow("Compiling..."));

    let isFirstCompile = true;

    compiler.hooks.done.tap("Done successfully", stats => {
      const messages = formatWebpackMessages(stats.toJson({}, true));
      const isSuccessful = !messages.errors.length && !messages.warnings.length;
      const showInstructions = isSuccessful && isFirstCompile;

      if (isSuccessful) {
        if (isFirstCompile) {
          console.log(chalk.green("Compiled successfully!"));
        } else {
          console.log(chalk.green("Re-compiled successfully!"));
        }
      }

      if (showInstructions) {
        console.log(`
        The app is running at:
          ${chalk.cyan(`http://localhost:${port}`)}
        Note that the development build is not optimized.
        To create a production build, use ${chalk.cyan(`npm run build`)}.
      `);
        isFirstCompile = false;
      }

      if (messages.errors.length) {
        console.log(chalk.red("Failed to compile"));

        messages.errors.forEach(message => {
          console.log(chalk.red(message));
        });
      }

      if (messages.warnings.length) {
        console.log(chalk.yellow("Compiled with warnings."));

        messages.warnings.forEach(message => {
          console.log(chalk.cyan(message));
        });
      }
    });

    return compiler;
  };
  const addMiddleware = devServer => {
    devServer.use(
      historyApiFallback({
        disableDotRule: true,
        htmlAcceptHeaders: ["text/html", "*/*"]
      })
    );
    devServer.use(devServer.middleware);
  };
  const runDevServer = compiler => {
    const devServer = new WebpackDevServer(compiler, {
      hot: true,
      quiet: true,
      contentBase: paths.appPublic,
      watchOptions: {
        ignored: /node_modules/
      }
    });

    addMiddleware(devServer);

    devServer.listen(port, err => {
      if (err) {
        return console.log(err);
      }

      console.log(chalk.cyan("Starting the development server..."));
      openBrowser(`http://localhost:${port}/`);

      return null;
    });
  };
  const compiler = setupCompiler(port);

  runDevServer(compiler);
};

run(3000);
