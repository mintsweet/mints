export const get = (url: string): object => {
  const [_, o] = url.split('?');
  const params = {};

  if (o) {
    const arr = o.split('&');
    arr.forEach(s => {
      const [k, v] = s.split('=');
      params[k] = v;
    });
  }

  return params;
};

export const set = (url: string, newParams: object): string => {
  const arr = [];
  const oldParams = get(url);

  Object.keys({ ...oldParams, ...newParams }).forEach(k => {
    if (newParams[k] || oldParams[k]) {
      arr.push(`${k}=${newParams[k] || oldParams[k]}`);
    }
  });

  return `${url.split('?')[0]}?${arr.join('&')}`;
};

export default { get, set };
