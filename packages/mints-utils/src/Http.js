import axios from 'axios';

export default class Http {
  constructor(host, opts) {
    this.host = host;
    this.opts = {
      requestBefore: () => {},
      responseError: () => {},
      ...opts,
    };
    this.init();
  }

  init = () => {
    axios.interceptors.request.use(config => {
      if (this.opts.requestBefore) {
        config = this.opts.requestBefore(config) || config;
      }
      return config;
    }, err => {
      return Promise.reject(err);
    });

    axios.interceptors.response.use(res => {
      return res.data;
    }, err => {
      if (this.opts.responseError) {
        this.opts.responseError();
      }
      return Promise.reject(err.message);
    });
  }

  get = (url, data, opts) => {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'get',
      url,
      params: data,
    });
  }

  post = (url, data, opts) => {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'post',
      url,
      data,
    });
  }

  put = (url, data, opts) => {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'put',
      url,
      data,
    });
  }

  patch = (url, data, opts) => {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'patch',
      url,
      data,
    });
  }

  del = (url, opts) => {
    return axios({
      ...opts,
      baseURL: this.host,
      method: 'delete',
      url,
    });
  }
}
