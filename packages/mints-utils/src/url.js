const { href, search, hash } = window.location;

const getUrlParams = (url = search) => {
  let tmpArr = [];
  const params = {};
  const urlArr = url.split('?');

  if (urlArr.length > 1) {
    tmpArr = urlArr[1].split('#')[0].split('&');
  }

  if (tmpArr.length > 0 && tmpArr[0] !== '') {
    tmpArr.forEach(item => {
      const tmp = item.split('=');
      params[tmp[0]] = tmp[1];
    });
  }

  return params;
};

const getHashParams = (url = hash) => {
  let tmp = '';
  const urlArr = url.split('#');
  if (urlArr.length > 1) {
    tmp = urlArr[1];
  }
  return tmp;
};

const setUrlParams = (_url = href, _params = {}, _hashParams = '') => {
  let url = _url;
  const paramsArr = [];
  const currentUrlParams = getUrlParams(url);
  const currentHashParams = getHashParams(url);
  const params = {
    ...currentUrlParams,
    ..._params
  };
  const hashParams = _hashParams || currentHashParams;

  Object.keys(params).forEach(key => {
    let str = key;
    if (params[key] !== null) {
      str = `${key}=${params[key]}`;
    }
    paramsArr.push(str);
  });

  url = `${url.split('#')[0].split('?')[0]}`;

  if (paramsArr.length > 0) {
    url += `?${paramsArr.join('&')}`;
  }

  if (hashParams) {
    url += `#${hashParams}`;
  }

  return url;
};

export default {
  get: getUrlParams,
  set: setUrlParams,
};
