import { service, execute } from '.'
import axios from 'axios'
export default {
  login: async (data: any) => service.post('/api/v1/users/login', data)
}


