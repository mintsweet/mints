const path = require('path');

module.exports = cmd => {
  return {
    cwd: process.cwd(),
    mode: 'MPA',
    outDir: cmd.outDir || path.join(process.cwd(), './dist'),
    publicUrl: cmd.publicUrl || '/',
    port: cmd.port || 4255,
    host: cmd.host || 'localhost',
  };
};
