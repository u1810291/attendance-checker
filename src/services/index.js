import axios from 'axios';


const service = axios;

service.interceptors.response.use(
  (res) => res,
  (error) => {
    window.location.replace('/logout');
    return Promise.reject(error);
  }
);

export { service };
