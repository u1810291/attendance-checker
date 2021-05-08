import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVICE_URL;

const service = axios.create({ baseURL });

service.interceptors.response.use(
  (res) => res,
  (error) => {
    window.location.replace('/logout');
    return Promise.reject(error);
  }
);

export { service };
