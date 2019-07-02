# Utils

Mints built in a lot of tool methods, you can run `npm install mints-utils -S` to use them.

## $

Package dom operation related method。

```javascript
const btn = $('.btn');
```

## env

Related to the operating environment.

### device

Use this method to get device type run your application.

```javascript
import { device } from 'mints-utils';

const isAndroid = device() === 'android' ? true : false;
const isIos = device() === 'ios' ? true : false;
const isOther = device() !== 'android' && device !== 'ios';
```

### app

Use this method to get application type.

```javascript
import { app } from 'mints-utils';

const isWx = app() === 'wechat' ? true : false;
```

## format

Related to the formate data.

### format.date

format time.

```javascript
import { format } from 'mints-utils';

const date = format.date(new Date(), 'YYYY-MM-DD');
```

### format.money

format money.

```javascript
import { format } from 'mints-utils';

const money = format.money(10214.3334); // 10.21
const money = format.money(10214.3334, 1); // 10.2
const money = format.money(10214.3334, 1, 1); // 10214.3
```

## storage

This method to package `window.localStorage`.

### storage.set

`window.localStorage.setItem`.

```javascript
import { storage } from 'mints-utils';

storage.set('token', token);
```

### storage.get

`window.localStorage.getItem`.

```javascript
import { storage } from 'mints-utils';

storage.get('token');
```

### storage.del

`window.localStorage.removeItem`.

```javascript
import { storage } from 'mints-utils';

storage.del('token');
```

### storage.clear

`window.localStorage.clear`.

```javascript
import { storage } from 'mints-utils';

storage.clear();
```

## tool

A some general tool method.

### title

set document title.

```javascript
import { tool } from 'mints-utils';

tool.title('设置网页标题');
```

## url

The url object can help you get or set the params above in url.

### url.get

To get params in url.

```javascript
import { url } from 'mints-utils';

const link = 'https://www.baidu.com?date=1111&type=xxx';
const params = url.get(link); // { date: 1111, type: 'xxx' }
```

### url.set

To set params in url.

```javascript
import { url } from 'mints-utils';

const link = 'https://www.baidu.com';
const params = url.link(url, { date: 1111, type: 'xxx' }); // https://www.baidu.com?date=1111&type=xxx
```

## Http

The class Http is package to `axios`;

```javascript
import { Http } from 'mints-utils';

class Request extends Http {
  constructor(host) {
    super(host, {
      loading: true,
      loadingText: '加载中',
      loadingMask: true
    });
  }
}

const { post } = new Request('https://www.baidu.com');

const getUser = id => {
  return post(`/v1/user/${id}`);
};
```
