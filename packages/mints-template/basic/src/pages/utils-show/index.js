import { $, env, format, storage } from 'mints-utils';
import Modal from '@/components/Modal';
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
  }

  init() {
    this.modal = new Modal({
      showCancelButton: false,
    });
    this.bindEvent();
  }

  bindEvent() {
    // 获取设备类型
    this.dom.env_device.on('click', '.btn', () => {
      const device = env.device();
      this.modal
        .update({
          title: '获取设备类型',
          message: `当前的设备是：${device}`,
        })
        .show();
    });

    // 获取APP类型
    this.dom.env_app.on('click', '.btn', () => {
      const app = env.app();
      this.modal
        .update({
          title: '获取 APP 类型',
          message: `当前的 APP 是：${app}`,
        })
        .show();
    });

    // 时间格式化
    this.dom.format_date.on('click', '.btn', () => {
      const { value = 'YYYY-MM-DD HH:mm:ss' } = document.getElementById('js-format-date-input').value;

      this.modal
        .update({
          title: '当前的时间是',
          message: format.date(new Date(), value),
        })
        .show();
    });

    // 金钱格式化
    this.dom.format_money.on('click', '.btn', () => {
      const { value } = document.getElementById('js-format-money-input');

      this.modal
        .update({
          title: '格式化后的数量是',
          message: format.money(value),
        })
        .show();
    });

    // 设置 localStorage
    this.dom.storage_set.on('click', '.btn', () => {
      const key = document.getElementById('js-storage-set-key').value;
      const { value } = document.getElementById('js-storage-set-value').value;

      storage.set(key, value);

      this.modal
        .update({
          title: '设置 localStorage',
          message: `设置 ${key} 为 ${value}`,
        })
        .show();
    });

    // 获取 localStorage
    this.dom.storage_get.on('click', '.btn', () => {
      const key = document.getElementById('js-storage-get-key').value;

      this.modal
        .update({
          title: '获取 localStorage',
          message: `获取 ${key} 的值为 ${storage.get(key)}`,
        })
        .show();
    });

    // 清空 localStorage
    this.dom.storage_clear.on('click', '.btn', () => {
      storage.clear();

      this.modal
        .update({
          title: '清空 localStorage',
          message: '成功',
        })
        .show();
    });
  }
}

const app = new UtilsShow();
app.init();
