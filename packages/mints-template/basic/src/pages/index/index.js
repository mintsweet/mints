import App from '@/utils/App';
import { $ } from 'mints-utils';
import * as API from './api';
import './index.less';

class Index extends App {
  dom = {
    main: $('#js-main'),
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
      <div>
        <span>${item.nickname}</span>
        <span>${item.email}</span>
      </div>
    `);

    this.dom.main.html(dom);
  }
}

const app = new Index();
app.init();
