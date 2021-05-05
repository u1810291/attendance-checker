import { service, execute } from '.'
import axios from 'axios'
export default {
  login: async (data: any) => axios.post('api/v1/users/login', data)
}
