const baseConfig = require('./base');

module.exports = options => {
  return {
    ...baseConfig(options),
    mode: 'development',
  };
};
