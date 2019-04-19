const loadConfig = require('./utils/loadConfig');
const generateOption = require('./utils/generateOption');
const webpackConfig = require('./utils/webpackConfig');
const cmd = require('./cmds');

class Mints {
  constructor(cmd) {
    const cmdOpt = generateOption(cmd);
    const configOpt = loadConfig(cmd.config);
    this.opts = Object.assign({}, configOpt, cmdOpt);
  }

  create(prjName) {
    cmd.new(prjName, this.opts);
  }

  start() {
    cmd.start(webpackConfig(this.opts), this.opts);
  }

  build() {}
}

module.exports = Mints;
