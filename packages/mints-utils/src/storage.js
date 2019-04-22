// 设置 localStorage
export const setLocal = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

// 获取 localStroge
export const getLocal = key => {
  const data = window.localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch(err) {
    return data;
  }
};

// 清除 localStorge
export const clearLocal = () => {
  window.localStorage.clear();
};
