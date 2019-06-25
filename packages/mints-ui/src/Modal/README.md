# Modal 对话框

### 使用指南

```javascript
import { Modal } from 'mints-ui';

this.modal = new Modal({
  header: '<div class="header"></div>',
  body: '<div class="body"></div>',
  footer: '<div class="footer"></div>',
});
```

### 代码演示

#### 显示

```javascript
this.modal.show();
```

#### 隐藏

```javascript
this.modal.hide();
```

#### 更新内容

```javascript
this.modal.update({
  body: '<div class="body">Update</div>'
});
```

### 属性

| 参数   | 类型   | 默认值 | 说明       |
| :----- | :----- | :----- | :--------- |
| header | String | ''     | 对话框头部 |
| body   | String | ''     | 对话框内容 |
| footer | String | ''     | 对话框脚部 |

### 方法

| 方法名 | 参数 | 说明     |
| :----- | :--- | :------- |
| show   | 无   | 显示     |
| hide   | 无   | 隐藏     |
| update | body | 更新内容 |
