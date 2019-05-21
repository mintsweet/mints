const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

const getStyleLoaders = (env, cssOptions, preProcessor) => {
  const loaders = [
    env === 'dev'
      ? {
        loader: 'style-loader'
      }
      : {
        loader: MiniCssExtractPlugin.loader
      },
    {
      loader: 'css-loader',
      options: cssOptions
    },
    {
      loader: 'postcss-loader'
    }
  ].filter(Boolean);

  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor)
    });
  }

  return loaders;
};

module.exports = (options, env) => {
  const isEnvDevelopment = env === 'dev';
  const isEnvProduction = env === 'prod';

  return {
    context: options.cwd,

    mode: env === 'prod' ? 'production' : 'development',

    devtool: isEnvProduction ? 'souce-map' : isEnvDevelopment && 'cheap-module-source-map',

    entry: entry(options),

    output: {
      path: options.outDir,
      filename: '[name].[hash].js',
      publicPath: options.publicUrl
    },

    resolve: {
      alias: {
        '@': path.join(options.cwd, './src')
      },
    },

    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          include: path.join(options.cwd, './src'),
          use: [
            {
              loader: require.resolve('eslint-loader')
            },
          ],
        },
        {
          test: /\.js$/,
          include: path.join(options.cwd, './src'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: getStyleLoaders({
            env,
          }),
        },
        {
          test: /\.module\.css$/,
          use: getStyleLoaders(env, {
            modules: true,
          }),
        },
        {
          test: /\.less$/,
          use: getStyleLoaders(env, {}, 'less-loader')
        },
        {
          test: /\.module\.less$/,
          use: getStyleLoaders(env, {
            modules: true
          }, 'less-loader')
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: '[name].[hash:8].[ext]',
          }
        }
      ],
    },
    plugins: html(options).concat([
      new WebpackBar({
        name: 'Mints',
      }),
      isEnvProduction && new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      })
    ])
  };
};
