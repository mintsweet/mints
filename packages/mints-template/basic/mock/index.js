export default {
  'GET /user/v1/users': {
    total: 2,
    page: 1,
    size: 10,
    users: [
      {
        id: 1,
        nickname: '青湛',
        username: '0x1304570@gmail.com'
      },
      {
        id: 2,
        nickname: '二号用户',
        username: '12356@qq.com'
      },
    ],
  },
  'POST /user/v1/users': (req, res) => {
    return res.send('OK');
  },
  'DELETE /user/v1/users/1': (req, res) => {
    return res.send('OK');
  },
  'PUT /user/v1/users/1': (req, res) => {
    return res.send('OK');
  }
};
