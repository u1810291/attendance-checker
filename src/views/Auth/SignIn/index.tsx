/* eslint-disable no-console */
import React, { useState } from 'react';
import service from '../../../services/login';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom'

export default () => {
  const [name, setName] = useState('');
  const history = useHistory()
  const [password, setPassword] = useState('');
  const cookies = new Cookies();
  const login = () => {
    const data = {
      name: name, password: password.replace(/\\/g, '')
    }
    service.login(data).then((res) => {
      cookies.set('token', res.status)
      return history.push('/list')
    }).catch((err) => console.log(err));
    return name;
  };
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); login(); }}>
        <input
          name="name"
          placeholder="Name"
          type="email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="text"
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
