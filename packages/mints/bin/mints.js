#!/usr/bin/env node

const chalk = require('chalk');
const currentMajorNodeVersion = process.versions.node.split('.')[0];
const localFile = require('import-local-file')(__filename);
const forceGlobal = process.argv.includes('--force-global');

if (currentMajorNodeVersion < 8) {
  console.error(chalk.red(`
    Your are runing Node${currentMajorNodeVersion}.
    Mints requires Node 8 or higher.
    Please update your version of Node.
  `));
  process.exit(1);
}

if (localFile && !forceGlobal) {
  console.log(`> Using local Mints ${chalk.blueBright(localFile)}.`);
  require(localFile);
} else {
  require('./cli');
}
