import { format } from '../src';

test('test function format.date when params type is not Date', () => {
  const date = '2018-03-03';

  expect(format.date(date, 'YYYY/MM/DD')).toEqual('');
});

test('test function format.date', () => {
  const date = new Date('2018-03-03');

  expect(format.date(date, 'YYYY/MM/DD')).toEqual('2018/03/03');
});

test('test function format.momeny', () => {
  const momeny = 10320;

  expect(format.money(momeny)).toEqual('103.20');
});
