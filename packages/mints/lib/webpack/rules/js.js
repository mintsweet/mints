const path = require('path');

module.exports = opts => {
  return {
    test: /\.js$/,
    include: [
      path.join(opts.cwd, './src')
    ],
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };
};
