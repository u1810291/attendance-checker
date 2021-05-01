import { useState } from 'react'
import axios from 'axios';
import service from '../../../services/login'
export default () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const login = () => {
    axios.post('https://demo.kipod.com/api/v1/users/login', { name, password }).then((res) => console.log(res))
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
