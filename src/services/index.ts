import axios from 'axios';

const baseURL = process.env.PUBLIC_URL || 'https://demo.kipod.com';

const service = axios.create({ baseURL });

service.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (parseInt(status, 10) === 401) {
      alert('Login or password is incorrect');
    }
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  const access_token = sessionStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${access_token}`;
  if (typeof config.data === typeof FormData) config.headers['Content-Type'] = 'multipart/form-data';
  return config;
});


export { service };
