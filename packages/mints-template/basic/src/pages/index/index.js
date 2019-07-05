import App from '@/utils/App';
import { $ } from 'mints-utils';
import * as API from './api';
import './index.less';

class Home extends App {
  dom = {
    list: $('#js-list'),
    btn: $('#js-go'),
  }

  init() {
    this.getData();
    this.bindEvent();
  }

  async getData() {
    const data = await API.getUsers();
    this.renderDom(data);
  }

  renderDom(data) {
    const dom = data.users.map(item => `
      <li>
        <span>${item.id}</span>
        <span>${item.nickname}</span>
      </li>
    `);

    dom.unshift(`
      <li>
        <span>ID</span>
        <span>昵称</span>
      </li>
    `);

    this.dom.list.html(dom.join(''));
  }

  bindEvent() {
    this.dom.btn.on('click', () => {
      window.location.href = '/utils-show.html';
    });
  }
}

const app = new Home();
app.init();
