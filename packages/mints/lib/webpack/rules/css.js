const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',
        },
      },
      {
        loader: 'css-loader',
      }
    ]
  };
};
