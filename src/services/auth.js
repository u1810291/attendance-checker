/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default {
  login: (data)=>axios.post('api/v1/users/login', data)
}