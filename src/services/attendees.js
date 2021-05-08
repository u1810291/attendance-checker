/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  getAll: () => axios.post('api/v1/faces/search'),
  getMe: () => axios.get('api/v1/users/me')
}