import App from '@/utils/App';
import { $ } from 'mints-utils';
import * as API from './api';
import './index.less';

class Home extends App {
  dom = {
    list: $('#js-list'),
  }

  init() {
    this.getData();
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
}

const app = new Home();
app.init();
