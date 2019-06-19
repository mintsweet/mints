import { Http } from 'mints-utils';
import { Servers } from './constants';

export default class Request extends Http {
  constructor(host, opts) {
    super(Servers[process.env.DEPLOY_ENV][host], opts);
  }
}
