import { service } from '.'

export default {
  login: (name: string, password: string) => service.post('/api/v1/users/login', { name, password })
}