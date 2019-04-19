const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = opts => {
  return opts.entry || './index.js';
};

const jsRule = opts => {
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

const cssRule = () => {
  return {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      }
    ]
  };
};

const lessRule = () => {
  return {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
      }
    ]
  };
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
     * 执行模式
     */
    mode: options.mode,

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
      filename: '[name].js',
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
        jsRule(options),
        cssRule(options),
        lessRule(options),
      ],
    },

    /**
     * 插件
     */
    plugins: [].concat(html(options)),
  };
};
