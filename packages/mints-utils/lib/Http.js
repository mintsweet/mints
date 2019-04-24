import axios from 'axios';

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
}
