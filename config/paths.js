/* eslint-disable import/no-dynamic-require,global-require */
const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const servedPath = process.env.PUBLIC_URL || "";

module.exports = {
  appSrc: resolveApp("src"),
  appBuild: resolveApp("build"),
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appIndexJs: resolveApp("src/index.tsx"),
  appPackageJson: resolveApp("package.json"),
  appNodeModules: resolveApp("node_modules"),
  servedPath,
  publicPath: servedPath,
  alias: {
    components: resolveApp("src/components"),
    constants: resolveApp("src/constants"),
    models: resolveApp("src/models"),
    services: resolveApp("src/services"),
    utils: resolveApp("src/utils"),
    stores: resolveApp("src/stores"),
    types: resolveApp("src/types"),
    routes: resolveApp("src/routes"),
    assets: resolveApp("src/assets")
  }
};
