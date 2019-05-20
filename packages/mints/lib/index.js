const loadConfig = require('./utils/loadConfig');
const generateOption = require('./utils/generateOption');
const webpack = require('./webpack.config');
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
    cmd.start(webpack(this.opts, 'dev'), this.opts);
  }

  build() {
    cmd.build(webpack(this.opts, 'prod'), this.opts);
  }
}

module.exports = Mints;
