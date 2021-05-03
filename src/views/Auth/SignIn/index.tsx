/* eslint-disable no-console */
import React, { useState } from 'react';
import service from '../../../services/login';

export default () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    const data = {
      name: name, password: password.replace(/\\/g, '')
    }
    service.login(data).then((res) => console.log(res)).catch((err) => console.log(err));
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
