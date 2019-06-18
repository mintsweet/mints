// 获取设备类型
export const device = () => {
  const { userAgent } = window.navigator;

  if (/Android/i.test(userAgent)) {
    return 'android';
  } else if (/iPhone|iPod|iPad/i.test(userAgent)) {
    return 'ios';
  }
  return false;
};

// 获取 App 类型
const app = () => {
  const { userAgent } = window.navigator;

  if (/MicroMessenger/i.test(userAgent)) {
    return 'wechat';
  }

  return false;
};

export default {
  device,
  app,
};
