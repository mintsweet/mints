import { $ } from 'mints-utils';
import './index.less';

interface IToastOption {
  text?: string;
  icon?: string;
  time?: number;
  mask?: boolean;
};

class Toast {
  dom: HTMLElement;
  timer: any;
  id: string;

  constructor() {
    this.id = 'mt-toast';
  }

  info({ text = '', time = 3000 }) {
    if (!text) {
      throw new Error('text is not found');
    }
    this.init({ text, time });
  }

  success({ text, time = 3000, mask = false }) {
    this.init({ text, time, icon: 'icon-success', mask });
  }

  fail({ text, time, mask }) {
    this.init({ text, time, icon: 'icon-fail', mask });
  }

  remove() {
    clearTimeout(this.timer);
    $(`#${this.id}`).remove();
  }

  private init({ text, time = 3000, icon, mask = false }: IToastOption) {
    const existDom = $(`#${this.id}`);
    if (existDom) {
      this.remove();
    }

    this.create({
      text,
      icon,
      mask,
    });

    this.timer = setTimeout(() => {
      this.dom.remove();
      this.dom = null;
      clearTimeout(this.timer);
    }, time);

    return this;
  }

  private create({ text = '', icon = '', mask }): void {
    this.dom = document.createElement('div');
    this.dom.id = this.id;
    this.dom.setAttribute('class', `${mask ? 'mt-toast mt-toast-mask' : 'mt-toast'}`);
    document.body.appendChild(this.dom);
    this.dom.innerHTML = `
      <div class="mt-toast">

      </div>
    `;
  }
}

export default new Toast();
