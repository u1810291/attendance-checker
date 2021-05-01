/* eslint-disable no-console */
import { useState } from 'react'
import service from '../../../services/login'
export default () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const login = () => {
    service.login(name, password).then((res) => console.log(res))
  }
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); login() }}>
        <input name="name" placeholder="Name" type="email" value={name} onChange={(e) => setName(e.target.value)} />
        <input name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
