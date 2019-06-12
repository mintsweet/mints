// 设置 localStorage
const setLocal = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

// 获取 localStroge
const getLocal = key => {
  const data = window.localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch(err) {
    return data;
  }
};

// 清除 localStorge
const clearLocal = () => {
  window.localStorage.clear();
};

export default {
  set: setLocal,
  get: getLocal,
  clear: clearLocal
};

