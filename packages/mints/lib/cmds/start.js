const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const logger = require('../logger');

module.exports = (config, options) => {
  logger.setOptions(options);
  logger.info('Staring the development server...');

  const PORT = options.port;
  const HOST = options.host;

  const webpackDevConfig = {
    hot: true,
    noInfo: true,
    proxy: options.proxy,
  };

  // create compiler
  const compiler = webpack(config);

  // create server
  const server = new WebpackDevServer(compiler, webpackDevConfig);

  ['SIGINT', 'SIGTERM'].forEach(signal => {
    process.on(signal, () => {
      server.close(() => {
        process.exit(0);
      });
    });
  });

  compiler.hooks.done.tap('mints start', stats => {
    if (stats.hasErrors()) {
      return;
    }

    server.listen(PORT, HOST, err => {
      if (err) {
        logger.error(err);
        return false;
      }
    });
  });
};
