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
