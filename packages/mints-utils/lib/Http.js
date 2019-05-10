import axios from 'axios';

axios.interceptors.response.use(res => {
  return res.data;
}, err => {
  return Promise.reject(err.response.data);
});

export default class Http {
  constructor(host, opts) {
    this.host = host;
    this.opts = {
      timeout: 2000,
      loading: false,
      loadingText: '',
      loadingMask: false,
      ...opts,
    };
  }

  get(api = '', data = {}) {
    return axios({
      url: api,
      method: 'get',
      baseURL: this.host,
      params: data,
    });
  }

  post(api = '', data = {}) {
    return axios({
      url: api,
      method: 'post',
      baseURL: this.host,
      data
    });
  }

  del(api = '', data = {}) {
    return axios({
      url: api,
      method: 'delete',
      baseURL: this.host,
      data
    });
  }

  put(api = '', data = {}) {
    return axios({
      url: api,
      method: 'put',
      baseURL: this.host,
      data
    });
  }
}
