const loadConfig = require('./utils/loadConfig');
const generateOption = require('./utils/generateOption');
const webpackDev = require('./webpack/dev');
const webpackProd = require('./webpack/prod');
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
    cmd.start(webpackDev(this.opts), this.opts);
  }

  build() {
    cmd.build(webpackProd(this.opts), this.opts);
  }
}

module.exports = Mints;
