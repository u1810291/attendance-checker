/* eslint-disable import/no-anonymous-default-export */
import {service} from '.'
export default {
  login: (data)=>service.post('api/v1/users/login', data)
}