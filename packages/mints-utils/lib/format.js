const formatDate = (val, format = 'YYYY-MM-DD') => {
  if (!val) return '';

  const date = new Date(parseInt(val));
  const o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };

  let result;

  if (/Y+/.test(format)) {
    result = result.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
  }

  Object.keys(o).forEach(key => {
    if (new RegExp(key).test(format)) {
      result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? o[key] : (`00${o[key]}`).substr((o[key].toString()).length));
    }
  });

  return result;
};

const formatMoney = (val, fix = 2, scale = 100) => {
  return parseFloat((val / scale)).toFixed(fix);
};

export default {
  date: formatDate,
  money: formatMoney,
};
