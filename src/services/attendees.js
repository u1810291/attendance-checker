/* eslint-disable import/no-anonymous-default-export */
import { service } from '.';

export default {
  getAll: (data) => service.post('api/v1/faces/search', data),
  getMe: () => service.get('api/v1/users/me')
}