import axios, { AxiosInstance } from 'axios';

interface HttpOptions {
  headers?: any;
  timeout?: number;
  withCredentials?: boolean;
  responseType?: any;
  requestBefore?: (config) => any;
  responseError?: (err) => void;
}

class Http {
  private instance: AxiosInstance;

  constructor(host: string, opts: HttpOptions = {}) {
    this.instance = axios.create({
      ...opts,
      baseURL: host,
    });

    this.instance.interceptors.request.use(
      config => {
        if (opts.requestBefore) {
          config = opts.requestBefore(config);
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.response.use(
      res => {
        return res.data;
      },
      err => {
        if (opts.responseError) {
          opts.responseError(err);
        }
        return Promise.reject(err);
      }
    );
  }

  public get(url: string, data?: object, opts?: object): Promise<any> {
    return this.instance({ ...opts, method: 'get', url, params: data });
  }

  public post(url: string, data?: object, opts?: object): Promise<any> {
    return this.instance({ ...opts, method: 'post', url, data });
  }

  public put(url: string, data?: object, opts?: object): Promise<any> {
    return this.instance({ ...opts, method: 'put', url, data });
  }

  public del(url: string, data?: object, opts?: object): Promise<any> {
    return this.instance({ ...opts, method: 'delete', url, data });
  }
}

export default Http;
