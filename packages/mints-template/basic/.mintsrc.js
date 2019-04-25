export default {
  // 多页应用 MPA | 单页应该 SPA
  mode: 'MPA',

  // 入口 | 无需配置自动寻在入口
  entry: {
    index: './src/pages/index/index.js',
    'utils-show': './src/pages/utils-show/index.js',
  },
};
