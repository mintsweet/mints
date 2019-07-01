import axios from 'axios';

axios.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});

axios.interceptors.response.use(res => {
  return res.data;
}, err => {
  return Promise.reject(err.message);
});

export default class Http {
  constructor(host) {
    this.host = host;
  }

  get(url, data, opts) {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'get',
      url,
      params: data,
    });
  }

  post(url, data, opts) {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'post',
      url,
      data,
    });
  }

  put(url, data, opts) {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'put',
      url,
      data,
    });
  }

  patch(url, data, opts) {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'patch',
      url,
      data,
    });
  }

  del(url, opts) {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'delete',
      url,
    });
  }
}
