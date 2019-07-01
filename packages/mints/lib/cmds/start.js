const os = require('os');
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const logger = require('../utils/logger');
const applyMock = require('../utils/applyMock');
const pkg = require('../../package.json');

module.exports = (config, options) => {
  logger.setOptions(options);

  logger.clear();
  logger.info('Starting the development server...\n');

  let isFirstCompile = true;
  const IS_CI = !!process.env.CI;
  const SILENT = !!process.env.SILENT;
  const PORT = options.port;
  const HOST = options.host;

  // create compiler
  const compiler = webpack(config);

  compiler.hooks.done.tap('mints start', stats => {
    if (stats.hasErrors()) {
      return;
    }

    if (isFirstCompile && !IS_CI && !SILENT) {
      const IP = getNetworkAddress();
      const localAddress = `http://localhost:${PORT}`;
      const networkAddress = `http://${IP}:${PORT}`;
      const docAddress = 'https://github.com/mintsweet/mints/blob/master/docs/README.md';

      const message = [
        chalk.blue('Welcome to use mints, serving your mints project!'),
        '',
        `  ${chalk.bold('- Local:')}            ${localAddress}`,
        `  ${chalk.bold('- On Your Network:')}  ${networkAddress}`,
        `  ${chalk.bold('- Documentation:')}    ${docAddress}`,
        '',
        `${chalk.grey('The current mints version is')} ${chalk.cyan(pkg.version)}`,
      ];

      console.log(message.join('\n'));

      isFirstCompile = false;
    }
  });

  const webpackDevConfig = {
    headers: {
      'access-control-allow-origin': '*',
    },
    quiet: true,
    overlay: {
      warnings: false,
      errors: true
    },
    open: isFirstCompile,
    proxy: options.proxy
  };

  // create server
  const server = new WebpackDevServer(compiler, webpackDevConfig);

  ['SIGINT', 'SIGTERM'].forEach(signal => {
    process.on(signal, () => {
      server.close(() => {
        process.exit(0);
      });
    });
  });

  // mock
  applyMock(server);

  server.listen(PORT, HOST, err => {
    if (err) {
      logger.error(err);
      return false;
    }
  });
};

function getNetworkAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const interface of interfaces[name]) {
      const { address, family, internal } = interface;
      if (family === 'IPv4' && !internal) {
        return address;
      }
    }
  }
}
