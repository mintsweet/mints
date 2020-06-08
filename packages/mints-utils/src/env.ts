type DeviceType = 'android' | 'ios' | 'unknown';

export const device = (): DeviceType => {
  const { userAgent } = window.navigator;
  if (/Android/i.test(userAgent)) {
    return 'android';
  } else if (/iPhone|iPod|iPad/i.test(userAgent)) {
    return 'ios';
  }
  return 'unknown';
};

export default device;
