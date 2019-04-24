const { userAgent } = window.navigator;

// 获取设备类型
export const getDevice = () => {
  if (/Android/i.test(userAgent)) {
    return 'android';
  } else if (/iPhone|iPod|iPad/i.test(userAgent)) {
    return 'ios';
  }
  return false;
};

// 判断是否在微信中
export const isWx = () => /MicroMessenger/i.test(userAgent);

// 判断是否在QQ中
export const isQQ = () => /qq/i.test(userAgent);
