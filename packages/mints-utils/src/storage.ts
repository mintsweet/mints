export const set = (key: string, data: object | string): void => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

export const get = (key: string): object | string => {
  const data = window.localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

export const del = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const clear = (): void => {
  window.localStorage.clear();
};

export default { set, get, del, clear };
