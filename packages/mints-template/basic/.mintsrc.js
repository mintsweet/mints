export default {
  // 多页应用 MPA | 单页应用 SPA，默认值为 MPA
  mode: 'MPA',

  // 入口 | 指定 mode 后无需配置自动寻找入口
  entry: {
    index: './src/pages/index/index.js',
    'utils-show': './src/pages/utils-show/index.js',
  },
};
