const loadConfig = require('./utils/loadConfig');
const generateOption = require('./utils/generateOption');

class Mints {
  constructor(cmd) {
    const cmdOpt = generateOption(cmd);
    const configOpt = loadConfig(cmd.config);
    this.opts = Object.assign({}, configOpt, cmdOpt);
  }

  create(prjName) {
    console.log(prjName);
  }

  start() {
    console.log('start');
  }

  build() {
    console.log('build');
  }
}

module.exports = Mints;
