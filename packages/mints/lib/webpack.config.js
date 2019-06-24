const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (options, env) => {
  const isEnvDevelopment = env === 'dev';
  const isEnvProduction = env === 'prod';

  const generateEntry = () => {
    if (options.entry) return options.entry;

    if (options.mode === 'MPA') {
      const obj = {};
      getPageDir().forEach(item => {
        const name = path.basename(item);
        obj[name] = path.join(options.cwd, item, 'index.js');
      });
      return obj;
    } else {
      return './index.js';
    }
  };

  const alias = Object.assign(
    {
      '@': path.join(options.cwd, './src')
    },
    options.alias
  );

  const generateStyleLoader = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment
        ? { loader: 'style-loader' }
        : { loader: MiniCssExtractPlugin.loader },
      {
        loader: 'css-loader',
        options: cssOptions
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-pxtorem')({
            }),
          ]
        }
      }
    ].filter(Boolean);

    if (preProcessor) {
      loaders.push({
        loader: require.resolve(preProcessor)
      });
    }

    return loaders;
  };

  const generateHTMLPlugin = () => {
    if (options.html) return options.html;

    if (options.mode === 'MPA') {
      const arr = [];
      getPageDir().forEach(item => {
        const name = path.basename(item);
        arr.push(new HtmlWebpackPlugin({
          filename: `${name}.html`,
          template: path.join(options.cwd, item, 'index.html'),
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

  const plugins = generateHTMLPlugin()
    .concat([
      new WebpackBar(),
      new CleanWebpackPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      isEnvProduction && new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ])
    .filter(Boolean);

  const optimization = isEnvProduction
    ? {
      splitChunks: {
        chunks: 'all'
      }
    }
    : {};

  return {
    context: options.cwd,

    mode: isEnvProduction ? 'production' : 'development',

    devtool: isEnvProduction ? false : 'cheap-module-source-map',

    entry: generateEntry(),

    output: {
      path: options.outDir,
      filename: '[name].[hash].js',
      publicPath: options.publicUrl
    },

    resolve: {
      alias,
    },

    optimization,

    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          include: path.join(options.cwd, './src'),
          use: [
            {
              loader: 'eslint-loader'
            },
          ],
        },
        {
          test: /\.js$/,
          include: path.join(options.cwd, './src'),
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                [
                  require.resolve('@babel/plugin-proposal-class-properties')
                ]
              ]
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: generateStyleLoader(),
        },
        options.css.module && {
          test: /\.module\.css$/,
          use: generateStyleLoader({ modules: true }),
        },
        {
          test: /\.less$/,
          use: generateStyleLoader({}, 'less-loader')
        },
        options.css.module && {
          test: /\.module\.less$/,
          use: generateStyleLoader({ modules: true }, 'less-loader')
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve('url-loader'),
          options: {
            limit: 8192,
            name: '[name].[hash].[ext]',
          }
        }
      ],
    },

    plugins
  };
};

function getPageDir() {
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
