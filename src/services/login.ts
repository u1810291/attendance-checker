import { service, execute } from '.'
import axios from 'axios'
export default {
  login: async (data: any) => axios.post('https://demo.kipod.com/api/v1/users/login', data)
}
