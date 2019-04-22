module.exports = () => {
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
