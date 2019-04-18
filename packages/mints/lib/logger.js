const chalk = require('chalk');

class Logger {
  constructor(opts) {
    this.setOptions(opts);
  }

  setOptions(opts) {
    this.logLevel = opts && isNaN(opts.logLevel) === false
      ? Number(opts.logLevel)
      : 3;
  }

  log(...args) {
    console.log(...args.map(arg => {
      return typeof arg === 'function' ? arg() : arg;
    }));
  }

  debug(...args) {
    if (this.logLevel < 4) {
      return;
    }

    this.log(chalk.magenta('debug:'), ...args);
  }

  error(...args) {
    if (this.logLevel < 3) {
      return;
    }
    this.log(chalk.red('error:'), ...args);
  }

  warn(...args) {
    if (this.logLevel < 2) {
      return;
    }
    this.log(chalk.yellow('warn:'), ...args);
  }

  info(...args) {
    if (this.logLevel < 1) {
      return;
    }
    this.log(chalk.cyan('info:'), ...args);
  }

  success(...args) {
    this.log(chalk.green('success:'), ...args);
  }

  done(...args) {
    this.log(
      chalk.green(process.platform === 'win32' ? '√' : '✔'),
      ...args.map(arg => chalk.bold(arg))
    );
  }
}

module.exports = new Logger();
