import * as url from '../src/url';

const testUrl = 'http://www.baidu.com?type=search&params=name';

test("test url's get", () => {
  expect(url.get(testUrl)).toEqual({
    type: 'search',
    params: 'name',
  });
});

test("test url's set", () => {
  expect(
    url.set('http://www.baidu.com', { type: 'search', params: 'name' })
  ).toEqual(testUrl);
});

test("test url's set", () => {
  expect(
    url.set('http://www.baidu.com?type=search', { params: 'name' })
  ).toEqual(testUrl);
});
