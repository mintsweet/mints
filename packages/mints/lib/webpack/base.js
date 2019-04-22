const HtmlWebpackPlugin = require('html-webpack-plugin');
const rule = require('./rules');

const entry = opts => {
  return opts.entry || './index.js';
};

const html = opts => {
  return Object.keys(opts.html).map(key => {
    return new HtmlWebpackPlugin({
      filename: `${key}.html`,
      template: opts.html[key],
      chunks: [key],
    });
  });
};

module.exports = options => {
  return {
    /**
     * 基础目录
     */
    context: options.cwd,

    /**
     * 起点或者是应用程序的起点入口
     */
    entry: entry(options),

    /**
     * 输出
     */
    output: {
      path: options.outDir,
      filename: '[name].[hash].js',
      publicPath: options.publicUrl
    },

    /**
     * 解析
     */
    resolve: {
      alias: {
        '@': './src'
      },
    },

    /**
     * 模块
     */
    module: {
      rules: [
        rule.js(options),
        rule.css(options),
        rule.less(options),
      ],
    },

    /**
     * 插件
     */
    plugins: [].concat(html(options)),
  };
};
