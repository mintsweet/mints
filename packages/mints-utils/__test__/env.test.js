import { env } from '../index';

const android = 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Mobile Safari/537.36';
const ios = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
const wx = 'MicroMessenger';

test('android device', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: android,
    writable: true,
  });

  expect(env.device()).toEqual('android');
});

test('ios device', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: ios,
    writable: true,
  });

  expect(env.device()).toEqual('ios');
});

test('not android or ios device', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: '',
    writable: true,
  });

  expect(env.device()).toEqual(false);
});

test('wechat app', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: wx,
    writable: true,
  });

  expect(env.app()).toEqual('wechat');
});

test('unable to determine app type', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: '',
    writable: true,
  });

  expect(env.app()).toEqual(false);
});
