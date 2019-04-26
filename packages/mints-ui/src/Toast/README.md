## Toast 轻提示

### 使用指南

```javascript
import { Toast } from 'mints-ui';
```

### 代码演示

#### 文字提示

```javascript
Toast('提示内容');

Toast.info('提示内容')
```

#### 加载提示

```javascript
Toast.loading({
  mask: true,
  text: '加载中',
});
```

#### 成功/失败提示

```javascript
Toast.success('成功文案);
Toast.fail('失败文案');
```

### 属性

| 参数     | 类型    | 默认值 | 说明                                                 |
| :------- | :------ | :----- | :--------------------------------------------------- |
| type     | String  | info   | 提示类型，可选值为 `info` `loading` `success` `fail` |
| text     | String  | ''     | 内容                                                 |
| mask     | Boolean | false  | 是否显示贝京蒙层                                     |
| duration | Number  | 3000   | 显示时长(ms), 值为 0 时，toast 不会消失              |


### 方法

| 方法名        | 参数           | 返回值     | 说明         |
| :------------ | :------------- | :--------- | :----------- |
| Toast         | `options|text` | toast 实例 | 展示提示     |
| Toast.loading | `options|text` | toast 实例 | 展示加载提示 |
| Toast.success | `options|text` | toast 实例 | 展示成功提示 |
| Toast.fail    | `options|text` | toast 实例 | 展示失败提示 |

