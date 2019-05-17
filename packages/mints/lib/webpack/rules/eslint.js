const path = require('path');

module.exports = opts => {
  return {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    enforce: 'pre',
    use: [
      {
        loader: require.resolve('eslint-loader')
      },
    ],
    include: path.join(opts.cwd, './src'),
  };
};
