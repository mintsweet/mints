const path = require('path');

module.exports = cmd => {
  return {
    cwd: process.cwd(),
    mode: cmd.mode || 'MPA',
    entry: {},
    outDir: cmd.outDir || path.join(process.cwd(), './dist'),
    publicUrl: cmd.publicUrl || '/',
    css: {
      module: true,
      sourceMap: false,
    },
    alias: {},
    port: cmd.port || 4255,
    host: cmd.host || 'localhost',
    proxy: {},
  };
};
