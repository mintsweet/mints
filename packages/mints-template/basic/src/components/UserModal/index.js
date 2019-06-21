import { Modal } from 'mints-ui';
import './index.less';

export default class UserModal extends Modal {
  constructor(opts) {
    super(opts);
    this.opts = {
      ...opts,
    };
  }
}
