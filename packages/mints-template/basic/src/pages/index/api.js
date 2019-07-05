import Request from '@/utils/Request';

const { get } = new Request('user');

export const getUsers = () => {
  return get('/v1/users');
};
