import axios from 'axios';

const baseURL = 'https://demo.kipod.com';

const service = axios.create({ baseURL });

const CustomAxios = {
  _instance: axios.create({ baseURL: '/api' }),
  get instance() {
    return this._instance;
  }
};

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
  config.headers['Access-Control-Allow-Origin'] = '92.38.55.127:3000'
  return config;
});

export function execute(promise: any) {
  console.log(promise)
  return new Promise((resolve, reject) => {
    promise
      .then((response: any) => {
        console.log(response)
        resolve(response.data);
      })
      .catch(reject);
  });
}


export { service };

export default CustomAxios.instance;