const path = require('path');

module.exports = cmd => {
  return {
    cwd: process.cwd(),
    mode: cmd.name() === 'build' ? 'production' : 'development',
    outDir: cmd.outDir || path.join(process.cwd(), './dist'),
    publicUrl: cmd.name() === 'build' ? cmd.publicUrl : '/',
    port: cmd.port || 4255,
    host: cmd.host || 'localhost',
  };
};
