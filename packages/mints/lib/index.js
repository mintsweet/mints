const loadConfig = require('./utils/loadConfig');
const generateOption = require('./utils/generateOption');
const webpackConfig = require('./webpack.config');
const cmd = require('./cmds');

class Mints {
  constructor(cmd) {
    const defaultOptions = generateOption(cmd);
    const configOptions = loadConfig(cmd.config);
    this.opts = Object.assign({}, configOptions, defaultOptions);
  }

  create(prjName) {
    cmd.new(prjName, this.opts);
  }

  start() {
    cmd.start(webpackConfig(this.opts, 'dev'), this.opts);
  }

  build() {
    cmd.build(webpackConfig(this.opts, 'prod'), this.opts);
  }
}

module.exports = Mints;
