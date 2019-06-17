import { storage } from '../index';

test('test function storage\'s set', () => {
  storage.set('user', 'admin');

  expect(window.localStorage.getItem('user')).toEqual('"admin"');
});

test('test function storage\'s get', () => {
  storage.set('user', { username: 'admin', id: 1 });

  expect(storage.get('user')).toEqual({
    username: 'admin',
    id: 1
  });
});

test('test function storage\'s clear', () => {
  storage.set('token', 'test');

  expect(storage.get('token')).toEqual('test');

  storage.clear();

  expect(storage.get('token')).toEqual(null);
});