# mints-template

> mints 项目公共模板

### 目录结构

```
├── mock                # 接口模拟
├── src                 # 源代码目录
  ├── components        # 公共组件
  ├── pages             # 页面
    └── index           # 页面1
      └── assets        # 静态资源
      └── api.js        # 接口定义
      └── index.js      # 页面事件处理
      └── index.html    # 
      └── index.less    # 页面样式
    └── utils-show      # 工具库演示页面
      └── index.js      # 
      └── index.html    # 
      └── index.less    #
  ├── styles            #
      └── global.less   # 公共样式
      └── reset.less    # 重置样式
      └── variable.less # 公共变量
  ├── utils             #
      └── App.js        # 初始启动文件
      └── constants.js  # 公共常量存储文件
      └── Request.js    # 请求方法封装
```

### 打包命名

开启本地服务，默认端口`4255`，默认显示`pages/index/index.html`

```bash
npm start
```

打包内容

```bash
npm run build
```

### .mintsrc.js 配置

```javascript
export default {
  // 多页应用 MPA | 单页应该 SPA
  mode: 'MPA',

  // 入口 | 无需配置自动寻在入口
  entry: {
    index: './src/pages/index/index.js',
    page2: './src/pages/page2/index.js',
  },
};
```
