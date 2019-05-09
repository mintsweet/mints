import Request from '@/utils/Request';

const { get } = new Request('user');

export const getUser = () => {
  return get('/v1/user');
};
