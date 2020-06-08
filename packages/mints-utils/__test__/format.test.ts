import * as format from '../src/format';

test('test function format.date', () => {
  expect(format.date(new Date('2018-03-03')).format('YYYY/MM/DD')).toEqual(
    '2018/03/03'
  );
});

test('test function format.momeny', () => {
  expect(format.money(10320)).toEqual('10,320');
});
