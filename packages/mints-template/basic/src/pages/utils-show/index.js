import {
  $, env, format,
  storage, tool, url,
} from 'mints-utils';
import UserModal from '@/components/UserModal';
import App from '@/utils/App';
import './index.less';

class UtilsShow extends App {
  dom = {
    env_device: $('#js-env-device'),
    env_app: $('#js-env-app'),
    format_date: $('#js-format-date'),
    format_money: $('#js-format-money'),
    storage_set: $('#js-storage-set'),
    storage_get: $('#js-storage-get'),
    storage_clear: $('#js-storage-clear'),
    tool_title: $('#js-tool-title'),
    url_get: $('#js-url-get'),
    url_set: $('#js-url-set'),
  }

  init() {
    this.modal = new UserModal();
    this.bindEvent();
  }

  bindEvent() {
    // 获取设备类型
    this.dom.env_device.on('click', '.btn', () => {
      this.modal
        .update({
          body: env.device()
        })
        .show();
    });

    // 获取APP类型
    this.dom.env_app.on('click', '.btn', () => {
      this.modal
        .update({
          body: env.app()
        })
        .show();
    });

    // 时间格式化
    this.dom.format_date.on('click', '.btn', () => {
      const value = this.dom.format_date.find('input').value();

      this.modal
        .update({
          body: format.date(new Date(), value)
        })
        .show();
    });

    // 金钱格式化
    this.dom.format_money.on('click', '.btn', () => {
      const value = this.dom.format_money.find('input').value();

      this.modal
        .update({
          body: format.money(value)
        })
        .show();
    });

    // 设置 localStorage
    this.dom.storage_set.on('click', '.btn', () => {
      const key = this.dom.storage_set.find('input[name=key]').value();
      const value = this.dom.storage_set.find('input[name=value]').value();

      storage.set(key, value);

      this.modal
        .update({
          body: '设置 localStorage 成功'
        })
        .show();
    });

    // 获取 localStorage
    this.dom.storage_get.on('click', '.btn', () => {
      const key = this.dom.storage_get.find('input').value();

      this.modal
        .update({
          body: storage.get(key)
        })
        .show();
    });

    // 清空 localStorage
    this.dom.storage_clear.on('click', '.btn', () => {
      storage.clear();

      this.modal
        .update({
          body: '清空 localStorage 成功'
        })
        .show();
    });

    // 设置网页标题
    this.dom.tool_title.on('click', '.btn', () => {
      const title = this.dom.tool_title.find('input').value();

      tool.title(title);

      this.modal
        .update({
          body: '设置网页标题 成功'
        })
        .show();
    });

    // 获取 url 上的参数
    this.dom.url_get.on('click', '.btn', () => {
      const value = this.dom.url_get.find('input').value();

      this.modal
        .update({
          body: url.get(value)
        })
        .show();
    });

    // 设置 url 上的参数
    this.dom.url_set.on('click', '.btn', () => {
      const link = this.dom.url_set.find('input[name=link]').value();
      const params = this.dom.url_set.find('input[name=params]').value();

      this.modal
        .update({
          body: url.set(link, params)
        })
        .show();
    });
  }
}

const app = new UtilsShow();
app.init();
