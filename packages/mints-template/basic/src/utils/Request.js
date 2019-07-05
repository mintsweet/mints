import { Http } from 'mints-utils';
import { Servers } from './constants';

export default class Request extends Http {
  constructor(host, opts) {
    super(Servers[process.env.DEPLOY_ENV][host], {
      requestBefore: config => {
        // You can update request config
        return config;
      },
      responseError: err => {
        // Maybe response has error, you can get it.
        console.error(err);
      },
      ...opts,
    });
  }
}
