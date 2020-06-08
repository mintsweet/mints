import env from '../src/env';

const android =
  'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Mobile Safari/537.36';
const ios =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';

test('android env', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: android,
    writable: true,
  });
  expect(env()).toEqual('android');
});

test('ios env', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: ios,
    writable: true,
  });
  expect(env()).toEqual('ios');
});

test('unknown env', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: '',
    writable: true,
  });
  expect(env()).toEqual('unknown');
});
