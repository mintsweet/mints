#! /usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const updateNotifier = require('update-notifier');
const envinfo = require('envinfo');
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
  .description(chalk.dim.cyan(pkg.description))
  .option('--info', 'print environment debug info');

program
  .command('new <project-name>')
  .description(chalk.dim.yellow('new a template project'))
  .option('--verbose', 'print additional logs')
  .option('--use-npm')
  .action((project, cmd) => {
    builder(cmd, project);
  });

program
  .command('start')
  .description(chalk.dim.yellow('start a development service'))
  .option('-m --mode <type>', 'specity your application type MPA or SPA')
  .option('-d --out-dir <dir>', 'the directory to output files')
  .option('--public-url <url>', 'the base URL your application bundle will be deployed at')
  .option('-p --port <port>', 'set service port')
  .option('-h --host <host>', 'set service host')
  .action(builder);

program
  .command('build')
  .description(chalk.dim.yellow('build your application'))
  .option('-m --mode <type>', 'specity your application type MPA or SPA')
  .option('-d --out-dir <dir>', 'the directory to output files')
  .option('--public-url <url>', 'the base URL your application bundle will be deployed at')
  .action(builder);

program
  .on('--help', () => {
    console.log('');
    console.log(`  Run ${chalk.bold.red('mints <command> -h(--help)')} for more information on specific commands.`);
    console.log('  If you have some questions or suggestions, welcome to contribute.');
    console.log('');
  });

program
  .parse(process.argv);

if (program.info) {
  console.log(chalk.bold('\nEnvironment Info:'));
  return envinfo
    .run(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'npm', 'Yarn'],
        Browsers: ['Chrome', 'Edge', 'Internet Explorer', 'Firefox', 'Safari'],
        npmPackages: [],
        npmGlobalPackages: [],
      },
      {
        duplicates: true,
        showNotFound: true,
      }
    )
    .then(console.log);
}
