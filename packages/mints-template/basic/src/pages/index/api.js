import Request from '@/utils/Request';

const { get, post, del, put } = new Request('user');

export const getUser = () => {
  return get('/v1/user');
};

export const createUser = params => {
  return post('/v1/user', params);
};

export const delUser = id => {
  return del(`/v1/user/${id}`);
};

export const updateUser = (id, params) => {
  return put(`/v1/user/${id}`, params);
};
