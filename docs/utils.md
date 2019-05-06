# Utils

Mints built in a lot of tool methods, you can run `npm install mints-utils -S` to use them.

## env

Related to the operating environment.

### getDevice

Use this method to get device type run your application.

```javascript
import { device } from 'mints-utils';

const isAndroid = device === 'android' ? true : false;
const isIos = device === 'ios' ? true : false;
const isOther = device !== 'android' && device !== 'ios';
```

### isWX

Determine if your app in wechat.

```javascript
import { isWx } from 'mints-utils';

if (isWx) {
  return true;
} else {
  return false;
}
```

### isQQ

Determine if your app in QQ.

```javascript
import { isQQ } from 'mints-utils';

if (isQQ) {
  return true;
} else {
  return false;
}
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

### storage.clear

`window.localStorage.clear`.

```javascript
import { storage } from 'mints-utils';

storage.clear();
```

## url

The url object can help you get or set the params above in url.

### url.get

To get params in url.

```javascript
import { url } from 'mints-utils';

const url = 'https://www.baidu.com?date=1111&type=xxx';
const params = url.get(url); // { date: 1111, type: 'xxx' }
```

### url.set

To set params in url.

```javascript
import { url } from 'mints-utils';

const url = 'https://www.baidu.com';
const params = url.set(url, { date: 1111, type: 'xxx' }); // https://www.baidu.com?date=1111&type=xxx
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
