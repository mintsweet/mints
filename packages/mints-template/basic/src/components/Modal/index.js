import { $ } from 'mints-utils';
import './index.less';

export default class Modal {
  constructor(opts) {
    this._id = 'mt-modal';
    this._init(opts);
  }

  update(opts) {
    const title = opts.title || this.opts.title;
    const message = opts.message || this.opts.message;

    $(`#${this._id} .mt-modal_header`).html(title);
    $(`#${this._id} .mt-modal_content`).html(message);

    return this;
  }

  show() {
    $(`#${this._id}`).show();
  }

  hide() {
    $(`#${this._id}`).hide();
  }

  _init(opts) {
    this.opts = {
      title: '',
      message: '',
      showConfirmButton: true,
      showCancelButton: true,
      onConfrim: () => {},
      onCancel: () => {},
      ...opts,
    };

    this._create();
    this._bind();
  }

  _create() {
    this.dom = document.createElement('div');
    this.dom.id = this._id;
    this.dom.setAttribute('class', 'mt-modal');
    document.body.appendChild(this.dom);
    this.dom.innerHTML = `
      <div class="mt-modal_popup"></div>
      <div class="mt-modal_inner">
        <div class="mt-modal_header">${this.opts.title}</div>
        <div class="mt-modal_content">${this.opts.message}</div>
        <div class="mt-modal_footer">
          ${this.opts.showCancelButton ? '<div id="mt-modal_cancel" class="mt-modal_btn">取消</div>' : ''}
          ${this.opts.showConfirmButton ? '<div id="mt-modal_confirm" class="mt-modal_btn">确认</div>' : ''}
        </div>
      </div>
    `;
  }

  _bind() {
    $('#mt-modal_cancel').on('click', () => {
      this.hide();
      this.opts.onCancel();
    });

    $('#mt-modal_confirm').on('click', () => {
      this.hide();
      this.opts.onConfrim();
    });
  }
}
