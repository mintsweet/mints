import { Http } from '../index';

const http = new Http('https://jsonplaceholder.typicode.com');

test('test function Http.get', async () => {
  const post = await http.get('/posts/1');

  expect(post).toEqual({
    id: 1,
    userId: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  });
});

test('test function Http.post', async () => {
  const post = await http.post('/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  });

  expect(post).toEqual({
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
});

test('test function Http.put', async () => {
  const post = await http.put('/posts/1', {
    title: 'foo',
    body: 'bar',
    userId: 1
  });

  expect(post).toEqual({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
});

test('test function Http.patch', async () => {
  const post = await http.patch('/posts/1', {
    title: 'foo'
  });

  expect(post).toEqual({
    id: 1,
    title: 'foo',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    userId: 1,
  });
});

test('test function Http.delete', async () => {
  const res = await http.del('/posts/1');

  expect(res).toEqual({});
});
