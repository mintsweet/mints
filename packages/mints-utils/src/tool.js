import { device } from './env';

export const setTitle = (title = '') => {
  window.document.title = title;

  if (device === 'ios') {
    const iframe = window.document.createElement('iframe');
    iframe.style.visibility = 'hidden';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.onload = () => {
      setTimeout(() => {
        window.document.body.removeChild(iframe);
      }, 0);
    };
    document.body.appendChild(iframe);
  }
};
