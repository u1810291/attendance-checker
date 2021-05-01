import axios, { service, execute } from '.'

export default {
  login: (name: string, password: string) => execute(axios.post('/v1/users/login', { name, password }))
}