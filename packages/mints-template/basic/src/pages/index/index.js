import App from '@/utils/App';
import { $ } from 'mints-utils';
import * as API from './api';
import './index.less';

class Index extends App {
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
        <span>${item.nickname}</span>
        <span>${item.email}</span>
      </li>
    `);

    this.dom.list.html(dom);
  }
}

const app = new Index();
app.init();
