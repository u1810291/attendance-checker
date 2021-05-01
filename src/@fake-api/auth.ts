import users from '../data/users';

export default (mock: any) => {
  mock.onPost('/api/v1/users/login').reply(
    (config: any) => new Promise((resolve) => {
      console.log(config)
      const { name, password } = JSON.parse(config.data);
      const find = users.find((user) => user.username === name);
      if (find && find.password === password) {
        return resolve([200, { data: { access_token: 'test_token', refresh_token: 'userId' } }]);
      }
      return resolve([400, { message: 'not matched' }]);
    })
  );
  mock.onPost('/auth/reset').reply(200, { message: 'success' });
  mock.onPost('/front-end/auth/verify').reply(200, { message: 'success' });
  mock.onPost('front-end/auth/pin-code/verify').reply(200, { message: 'success' });
  mock.onPost('/auth/changePassword').reply(200, { message: 'success' });
};
