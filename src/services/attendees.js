/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  getAll: (data) => axios.post('api/v1/faces/search', data),
  getMe: () => axios.get('api/v1/users/me')
}