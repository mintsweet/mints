#! /usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const Mints = require('../lib/index');

updateNotifier({ pkg }).notify();

const builder = (cmd, prjName = 'h5-tempalte') => {
  const mints = new Mints(cmd);

  switch (cmd.name()) {
    case 'new':
      mints.create(prjName);
      break;
    case 'start':
      mints.start();
      break;
    case 'build':
      mints.build();
      break;
    default:
      break;
  }
};

program
  .version(pkg.version)
  .usage(`${chalk.green('<command>')} ${chalk.blue('[options]')}`)
  .description(chalk.dim.cyan(pkg.description));

program
  .command('new <project>')
  .description(chalk.dim.yellow('new a template project'))
  .action((project, cmd) => {
    builder(cmd, project);
  });

program
  .command('start')
  .description(chalk.dim.yellow('start a development service'))
  .option('-p --port <port>', 'set service port')
  .option('-h --host <host>', 'set service host')
  .action(builder);

program
  .command('build')
  .description(chalk.dim.yellow('build your application'))
  .action(builder);

program
  .on('--help', () => {
    console.log('');
    console.log(`  Run ${chalk.bold.red('mints help <command>')} for more information on specific commands`);
    console.log('  If you have some questions or suggestions, welcome to contribute.');
    console.log('');
  });

program
  .parse(process.argv);
