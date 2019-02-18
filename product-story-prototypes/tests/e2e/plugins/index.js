// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

/* eslint-disable import/no-extraneous-dependencies, global-require, arrow-body-style */
// const webpack = require('@cypress/webpack-preprocessor')

// const setEnvironmentVariables = config => {
//   // we can grab some process environment variables
//   // and stick it into config.env before returning the updated config
//   config.env = config.env || {};
//   // you could extract only specific variables
//   // and rename them if necessary
//   config.env.FOO = process.env.FOO;
//   config.env.BAR = process.env.BAR;
//   console.log("Extending config.env with process.env.{FOO, BAR}");
// };

const setFolderAndFileConfigurations = config => {
  return Object.assign({}, config, {
    fixturesFolder: "tests/e2e/fixtures",
    integrationFolder: "tests/e2e/specs",
    screenshotsFolder: "tests/e2e/screenshots",
    videosFolder: "tests/e2e/videos",
    supportFile: "tests/e2e/support/index.js"
  });
};

module.exports = (on, config) => {
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))

  // setEnvironmentVariables(config);

  return setFolderAndFileConfigurations(config);
};
