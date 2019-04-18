const loadConfig = require('./utils/loadConfig');
const generateOption = require('./utils/generateOption');
const logger = require('./logger');

class Mints {
  constructor(cmd) {
    const cmdOpt = generateOption(cmd);
    const configOpt = loadConfig(cmd.config);

    this.opts = Object.assign({}, configOpt, cmdOpt);
    logger.setOptions(this.opts);
  }

  create(prjName) {
    logger.info(prjName);
  }

  start() {}

  build() {}
}

module.exports = Mints;
