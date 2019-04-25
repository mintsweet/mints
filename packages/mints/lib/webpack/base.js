const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const rule = require('./rules');

const getPageDir = () => {
  const globPath = 'src/pages/**/*.html';
  const pathDir = 'src/pages(/|\\\\)(.*?)(/|\\\\)html';
  const files = glob.sync(globPath);

  const entries = [];

  let dirname;

  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i]);
    entries.push(dirname.replace(new RegExp(`^${pathDir}`), '$2'));
  }

  return entries;
};

const entry = opts => {
  if (opts.entry) return opts.entry;

  if (opts.mode === 'MPA') {
    const obj = {};
    getPageDir().forEach(item => {
      const name = path.basename(item);
      obj[name] = path.join(opts.cwd, item, 'index.js');
    });
    return obj;
  } else {
    return './index.js';
  }
};

const html = opts => {
  if (opts.html) return opts.html;

  if (opts.mode === 'MPA') {
    const arr = [];
    getPageDir().forEach(item => {
      const name = path.basename(item);
      arr.push(new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.join(opts.cwd, item, 'index.html'),
        chunks: [name],
        inject: true,
      }));
    });
    return arr;
  } else {
    return [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
      })
    ];
  }
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
    plugins: [
      new WebpackBar({
        name: 'Mints',
      })
    ].concat(html(options)),
  };
};
