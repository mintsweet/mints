const webpack = require('webpack');
const logger = require('../logger');

module.exports = (config, options) => {
  logger.setOptions(options);

  webpack(config, (err, stats) => {
    logger.info('build, done!');

    if (err || stats.hasErrors()) {
      process.exit(1);
    }
  });
};
