import { $ } from 'mints-utils';
import './index.less';

export default class Popup {
  id: string;
  dom: HTMLElement;

  constructor({ body }) {
    this.id = 'mt-popup';
    this.init(body);
  }

  init({ body = '' }) {
    const existDom = $(`#${this.id}`);

    if (existDom) {
      existDom.remove();
    }

    this.dom = document.createElement('div');
    this.dom.id = this.id;
    this.dom.setAttribute('class', 'mt-popup');
    document.body.appendChild(this.dom);
    this.dom.innerHTML = body;
  }

  show() {
    this.dom.style.display = 'block';
  }

  hide() {
    this.dom.style.display = 'none';
  }
}
