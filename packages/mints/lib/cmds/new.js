const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const execSync = require('child_process').execSync;
const chalk = require('chalk');
const validateProjectName = require('validate-npm-package-name');
const spawn = require('cross-spawn');
const logger = require('../utils/logger');

const ALL_DEPENDENCIES = ['mints-template', 'mints-utils'];

const install = (root, useYarn, verbose) => {
  logger.info('Installing mints mints-template mints-utils and mints-ui...');

  return new Promise((resolve, reject) => {
    let command;
    let args;

    if (useYarn) {
      command = 'yarnpkg';
      args = ['add', '--exact'];

      [].push.apply(args, ALL_DEPENDENCIES);
      args.push('--cwd');
      args.push(root);
    } else {
      command = 'npm';
      args = [
        'install',
        '--save',
        '--save-exact',
        '--loglevel',
        'error',
      ].concat(ALL_DEPENDENCIES);
    }

    if (verbose) {
      args.push('--verbose');
    }

    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`,
        });
        return;
      }
      resolve();
    });
  });
};

const generateFile = (appPath, appName, template = 'basic') => {
  const appPkg = require(path.join(appPath, 'package.json'));

  appPkg.dependencies = appPkg.dependencies || {};
  appPkg.scripts = {
    start: 'node ../packages/mints/bin/mints.js start',
    build: 'node ../packages/mints/bin/mints.js build',
  };

  appPkg.eslintConfig = {
    extends: 'mints',
  };

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(appPkg, null, 2) + os.EOL
  );

  const readmeExists = fs.existsSync(path.join(appPath, 'README.md'));
  if (readmeExists) {
    fs.renameSync(
      path.join(appPath, 'README.md'),
      path.join(appPath, 'README.old.md')
    );
  }

  const templatePath = path.join(appPath, './node_modules/mints-template', template);

  if (fs.existsSync(templatePath)) {
    fs.copySync(templatePath, appPath);
  } else {
    logger.error(`Could not locate supplied template: ${chalk.green(templatePath)}`);
    return false;
  }

  try {
    fs.moveSync(
      path.join(appPath, 'gitignore'),
      path.join(appPath, '.gitignore'),
      []
    );
  } catch(err) {
    if (err.code === 'EEXIST') {
      const data = fs.readFileSync(path.join(appPath, 'gitignore'));
      fs.appendFileSync(path.join(appPath, '.gitignore'), data);
      fs.unlinkSync(path.join(appPath, 'gitignore'));
    } else {
      throw err;
    }
  }

  logger.done(`Success! Created ${appName} at ${appPath}`);
};

module.exports = (name, options) => {
  logger.setOptions(options);

  const printValidationResults = results => {
    if (typeof results !== 'undefined') {
      results.forEach(error => {
        logger.error(`  *  ${error}`);
      });
    }
  };

  // 检测项目名称是否为不可取名称
  const checkAppName = name => {
    const validationResult = validateProjectName(name);
    if (!validationResult.validForNewPackages) {
      logger.error(`could not create a project called ${name} because of npm naming restrictions:`);
      printValidationResults(validationResult.errors);
      printValidationResults(validationResult.warnings);
      process.exit(1);
    }

    if (/mints/g.test(name)) {
      logger.error(`we cannot create a project called ${name}, because cannot use project name with mints.`);
      process.exit(1);
    }
  };

  // 检测 npm
  const checkThatNpmCanReadCwd = () => {
    const cwd = process.cwd();
    let childOutput = null;
    try {
      childOutput = spawn.sync('npm', ['config', 'list']).output.join('');
    } catch(err) {
      return true;
    }

    if (typeof childOutput !== 'string') {
      return true;
    }

    const lines = childOutput.split('\n');
    const prefix = '; cwd = ';
    const line = lines.find(line => line.indexOf(prefix) === 0);

    if (typeof line !== 'string') {
      return true;
    }

    const npmCWD = line.substring(prefix.length);

    if (npmCWD === cwd) {
      return true;
    }

    logger.error('could not start an npm process in the right directory.');
    logger.error(`the current directory is: ${chalk.bold(cwd)}.`);
    logger.error(`however, a newly started npm process runs in: ${chalk.bold(npmCWD)}.`);
    logger.error('this is probably caused by a misconfigured system terminal shell.');

    if (process.platform === 'win32') {
      logger.error(`on Windows, this can usually be fixed by running: ${chalk.cyan('reg')} delete "HKCU\\Software\\Microsoft\\Command Processor" /v AutoRun /f ${chalk.cyan('reg')} delete "HKLM\\Software\\Microsoft\\Command Processor" /v AutoRun /f`);
      logger.error('try to run the above two lines in the terminal');
      logger.error('to learn more about this problem, read: https://blogs.msdn.microsoft.com/oldnewthing/20071121-00/?p=24433/');
    }

    return false;
  };

  // 检测 yarn
  const shouldUseYarn = () => {
    try {
      execSync('yarnpkg --version', { stdio: 'ignore' });
      return true;
    } catch (e) {
      return false;
    }
  }

  const root = path.resolve(name);
  const appName = path.basename(root);

  checkAppName(appName);
  fs.ensureDirSync(name);

  logger.info(`Create a new mints project in ${root}`);

  const pkgJson = {
    name: appName,
    version: '1.0.0',
    private: true
  };

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(pkgJson, null, 2) + os.EOL
  );

  const useYarn = options.useNpm ? false : shouldUseYarn();
  process.chdir(root);

  if (!useYarn && !checkThatNpmCanReadCwd()) {
    process.exit(1);
  }

  logger.info('Installing packages. This might take a couple of minutes.');

  install(root, useYarn)
    .then(() => {
      generateFile(root, appName);
    })
    .catch(reason => {
      logger.warn('Aborting installation.');
      if (reason.command) {
        logger.error(`  ${reason.command} has failed.`);
      } else {
        logger.error('Unexpected error. Please report it as a bug:');
        logger.error(reason);
      }

      // On 'exit' we will delete these files from target directory.
      const knownGeneratedFiles = [
        'package.json',
        'yarn.lock',
        'node_modules',
      ];
      const currentFiles = fs.readdirSync(path.join(root));
      currentFiles.forEach(file => {
        knownGeneratedFiles.forEach(fileToMatch => {
          // This removes all knownGeneratedFiles.
          if (file === fileToMatch) {
            logger.info(`Deleting generated file... ${chalk.cyan(file)}`);
            fs.removeSync(path.join(root, file));
          }
        });
      });
      const remainingFiles = fs.readdirSync(path.join(root));
      if (!remainingFiles.length) {
        // Delete target folder if empty
        logger.info(
          `Deleting ${chalk.cyan(`${appName}/`)} from ${chalk.cyan(
            path.resolve(root, '..')
          )}`
        );
        process.chdir(path.resolve(root, '..'));
        fs.removeSync(path.join(root));
      }
      logger.info('Done.');
      process.exit(1);
    });
};
