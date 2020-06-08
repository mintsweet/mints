export const date = require('dayjs');

export const money = (x: number): string => {
  return x.toLocaleString();
};

export default { date, money };
