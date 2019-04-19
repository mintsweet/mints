const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const logger = require('../logger');

module.exports = (config, options) => {
  logger.setOptions(options);

  const PORT = options.port;
  const HOST = options.host;

  const webpackDevConfig = {
    hot: true,
  };

  const compiler = webpack(config);

  const server = new WebpackDevServer(compiler, webpackDevConfig);

  server.listen(PORT, HOST, err => {
    if (err) {
      logger.error(err);
      return false;
    }
    logger.success('Staring the development server...\n');
  });
};
