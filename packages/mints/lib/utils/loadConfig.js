const path = require('path');

const isPkg = filePath => path.basename(filePath) === 'package.json';

module.exports = config => {
  const enforceConfig = typeof config === 'string';
  const files = enforceConfig
    ? [config]
    : [
      'mints.config.js',
      '.mintsrc.js',
      '.mintsrc.json',
      'package.json',
    ];

  for (let i = 0; i < files.length; i += 1) {
    const isLast = i === files.length - 1;
    const filePath = path.resolve(process.cwd(), files[i]);

    try {
      const config = require(filePath);

      if (isPkg(filePath)) {
        if (config.mintsConfig) {
          return config.mintsConfig;
        } else {
          return {};
        }
      }
      return config;
    } catch(err) {
      if (isLast) {
        return {};
      }
    }
  }
};
