import axios from 'axios';


const service = axios;

service.interceptors.response.use(
  (res) => res,
  (error) => {
    sessionStorage.setItem('token', '');
    window.location.replace('/signin');
    return Promise.reject(error);
  }
);

export { service };
