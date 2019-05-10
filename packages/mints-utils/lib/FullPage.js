export default class FullPage {
  constructor(el, opts) {
    this.el = el;
    this.opts = {
      duration: 500,
      loop: false,
      ...opts,
    };
  }

  init() {

  }
}
