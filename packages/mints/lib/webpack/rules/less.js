const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    test: /\.less$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',
        },
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
