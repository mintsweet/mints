import { tool } from '../src';

const ios = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';

test('test function tool\'s setTitle', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: ios,
    writable: true,
  });

  tool.title('设置一个标题');

  expect(document.title).toEqual('设置一个标题');
});
