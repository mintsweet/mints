const webpack = require('webpack');
const logger = require('../utils/logger');

module.exports = (config, options) => {
  logger.setOptions(options);

  logger.clear();
  logger.info('Starting build...\n');

  webpack(config, (err, stats) => {
    logger.done('Build, done!');

    if (err || stats.hasErrors()) {
      process.exit(1);
    }
  });
};
