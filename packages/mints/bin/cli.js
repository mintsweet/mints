#! /usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

updateNotifier({ pkg }).notify();

program
  .version(pkg.version)
  .usage(`${chalk.green('<command>')} ${chalk.blue('[options]')}`)
  .description(chalk.dim.cyan(pkg.description));

program
  .command('new <project>')
  .description(chalk.dim.yellow('new a template project'))
  .action();

program
  .command('start')
  .description(chalk.dim.yellow('start a development service'))
  .action();

  program
  .command('build')
  .description(chalk.dim.yellow('build your application'))
  .action();

program
  .on('--help', () => {
    console.log('');
    console.log(`  Run ${chalk.bold.red('mints help <command>')} for more information on specific commands`);
    console.log(`  If you have some questions or suggestions, welcome to contribute.`);
    console.log('');
  });

program
  .parse(process.argv);
