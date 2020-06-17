# Utils

Mints built in a lot of tool methods, you can run `npm install mints-utils -S` to use them.

## env

Related to the operating environment.

### device

Use this method to get device type run your application.

```javascript
import { device } from 'mints-utils';

const isAndroid = device() === 'android';
const isIos = device() === 'ios';
const unKnown = device() === 'unknown';
```

## format

Related to the formate data.

### format.date

export dayjs function.

```javascript
import { format } from 'mints-utils';

const date = format.date().format('YYYY-MM-DD HH:mm');
```

### format.money

format money.

```javascript
import { format } from 'mints-utils';

const money = format.money(10214); // 10,214
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

const http = new Htpp('https://www.baidu.com')

const getUser = id => {
  return http.get(`/v1/user/${id}`);
};
```
