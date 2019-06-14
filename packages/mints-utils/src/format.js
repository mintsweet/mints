const formatDate = (date, format = 'YYYY-MM-DD') => {
  if (!(date instanceof Date)) return '';

  const o = {
    'M+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
  };

  if (/(Y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
  }

  Object.keys(o).forEach(key => {
    if (new RegExp(`(${key})`).test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? o[key] : (`00${o[key]}`).substr((o[key].toString()).length));
    }
  });

  return format;
};

const formatMoney = (val, symbol = '', fix = 2, scale = 100) => {
  return `${symbol}${parseFloat((val / scale)).toFixed(fix)}`;
};

export default {
  date: formatDate,
  money: formatMoney,
};
